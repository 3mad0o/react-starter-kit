import React from "react";
import { CSSTransition } from "react-transition-group";

type BottomSheetProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const BottomSheet = ({
  isOpen,
  onClose,
  children,
}: BottomSheetProps) => {
  const backdropRef = React.useRef(null);
  const contentRef = React.useRef(null);

  return (
    <>
      {/* Backdrop */}
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="bottom-sheet"
        unmountOnExit
        nodeRef={backdropRef}
      >
        <div
          ref={backdropRef}
          className="fixed inset-0 z-50 flex items-end justify-center"
        >
          <div
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
          />

          {/* Sheet */}
          <CSSTransition
            in={isOpen}
            timeout={300}
            classNames="bottom-sheet-content"
            unmountOnExit
            nodeRef={contentRef}
          >
            <div
              ref={contentRef}
              className="relative bg-white rounded-t-2xl shadow-xl p-6 w-full max-w-lg"
            >
              {children}
            </div>
          </CSSTransition>
        </div>
      </CSSTransition>
    </>
  );
};