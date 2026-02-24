import React, { forwardRef } from "react";

type LabelProps = {
  children: React.ReactNode;
  size: "sm" | "md" | "lg";
} & React.ComponentPropsWithRef<"label">;
export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, size,className, ...rest }, ref) => {
    return (
      <label
        ref={ref}
        {...rest}
        className={`block font-medium text-gray-700 ${size === "sm" ? "text-sm" : size === "md" ? "text-base" : "text-lg"} ${className}`}
      >
        {children}
      </label>
    );
  },
);
