import React, { forwardRef } from "react";

type InputProps = React.ComponentPropsWithRef<"input">;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
        
      <input
        ref={ref}
        {...props}
        className={`border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-200 ${className}`}
      />
    );
  },
);
