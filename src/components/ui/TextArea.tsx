import React, { forwardRef } from "react";

type TextAreaPropsProps = React.ComponentPropsWithRef<"textarea">;
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaPropsProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        {...props}
        className={`border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-200 ${className}`}
      ></textarea>
    );
  },
);
