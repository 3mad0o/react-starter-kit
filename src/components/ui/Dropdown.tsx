import React, { use, useEffect, type JSX } from "react";

type DropdownProps = {
  title: JSX.Element | string;
  children: React.ReactNode;
    className?: string;
    id:string
};
export const Dropdown = ({ title, children,className,id }: DropdownProps) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          const target = event.target as HTMLElement;
            if (!target.closest("#"+id)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        
        return () => {
            document.removeEventListener("click", handleClickOutside);
        }
    }, []);
  return (
    <div id={id} className={`dropdown relative  text-left ${className} `}

    >
      <div onClick={() => setIsOpen((prev) => !prev)} className="cursor-pointer">
        {title}
      </div>
      <div 
      onClick={(e) => {
        e.stopPropagation();
        setIsOpen(false);
      }}
      className={`${isOpen ? "block" : "hidden"} origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}>
        <div className="py-1">{children}</div>
      </div>
    </div>
  );
};
