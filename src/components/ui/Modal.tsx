import React from "react";
import { CSSTransition } from "react-transition-group";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const backdropRef = React.useRef(null);
  const contentRef = React.useRef(null);

  return (
    <>
      {/* Backdrop */}
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="modal"
        unmountOnExit
        nodeRef={backdropRef}
      >
        <div
          ref={backdropRef}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <div
            className="absolute inset-0 bg-black/50 "
            onClick={onClose}
          />

          {/* Modal Content */}
          <CSSTransition
            in={isOpen}
            timeout={300}
            classNames="modal-content"
            unmountOnExit
            nodeRef={contentRef}
          >
            <div
              ref={contentRef}
              className="relative bg-white rounded-lg shadow-xl p-6 z-10 w-full max-w-lg"
            >
              {children}
            </div>
          </CSSTransition>
        </div>
      </CSSTransition>
    </>
  );
};