import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { createContext, useContext, useRef, useState } from "react";
import { IoWarningOutline, IoInformationCircleOutline } from "react-icons/io5";
import { MdOutlineErrorOutline } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";

type AlertOptions = {
  type: "success" | "error" | "info" | "warning";
  message: string;
  confirmText?: string;
  cancelText?: string;
  icon?: "success" | "error" | "info" | "warning";
};

type AlertContextType = {
  show: (options: AlertOptions) => Promise<boolean>;
};

const AlertContext = createContext<AlertContextType | null>(null);

export const useAlert = () => {
  const ctx = useContext(AlertContext);
  if (!ctx) throw new Error("useAlert must be used inside AlertProvider");
  return ctx;
};

export const AlertProvider = ({ children }: { children: React.ReactNode }) => {
  const [options, setOptions] = useState<AlertOptions | null>(null);
  const resolverRef = useRef<((value: boolean) => void) | null>(null);

  const show = (options: AlertOptions) => {
    setOptions(options);

    return new Promise<boolean>((resolve) => {
      resolverRef.current = resolve;
    });
  };

  const close = (value: boolean) => {
    setOptions(null);
    resolverRef.current?.(value);
    resolverRef.current = null;
  };

  return (
    <AlertContext.Provider value={{ show }}>
      {children}

      {options && (
        <Modal isOpen={!!options} onClose={() => close(false)}>
          <div className="p-4 rounded-md bg-white flex flex-col items-center gap-4 w-full">
            <div className={`text-${options.type}-500 text-4xl mb-2`}>
              {options.icon === "success" && <CiCircleCheck className="text-green-500 text-8xl"/>}
              {options.icon === "error" && <MdOutlineErrorOutline className="text-red-500 text-8xl"/>}
              {options.icon === "info" && <IoInformationCircleOutline className="text-red-500 text-8xl" />}
              {options.icon === "warning" && <IoWarningOutline className="text-red-500 text-8xl"/>}
            </div>

            {options.message}
        
            <div className=" flex justify-end gap-2 w-full">
              {options.cancelText && (
                <Button
                className="cursor-pointer"
                variant="danger" onClick={() => close(false)}>
                  {options.cancelText}
                </Button>
              )}

              {options.confirmText && (
                <Button
                className="cursor-pointer"
                onClick={() => close(true)}>
                  {options.confirmText}
                </Button>
              )}
            </div>
          </div>
        </Modal>
      )}
    </AlertContext.Provider>
  );
};
