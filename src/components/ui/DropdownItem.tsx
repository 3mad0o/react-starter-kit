import React from "react";

type DropdownProps = {
  children: React.ReactNode;
  className?: string;
};
export const DropdownItem = ({
  children,
  className,
  ...rest
}: DropdownProps) => {
  return (
    <div
      {...rest}
      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
};
