import React, { forwardRef } from 'react'

type ButtonProps = React.ComponentPropsWithRef<"button"> &  {
    variant?: "primary" | "secondary" | "danger" | "success" | "warning" | "info" | "light" | "dark"
};
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className,variant='primary', ...props }, ref) => {
    const variantClasses = {
        primary: 'bg-blue-500 hover:bg-blue-600 text-white',
        secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
        danger: 'bg-red-500 hover:bg-red-600 text-white',
        success: 'bg-green-500 hover:bg-green-600 text-white',
        warning: 'bg-yellow-500 hover:bg-yellow-600 text-white',
        info: 'bg-cyan-500 hover:bg-cyan-600 text-white',
        light: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
        dark: 'bg-gray-800 hover:bg-gray-900 text-white',
    } as const;
  return (
    <button
        ref={ref}
        {...props}
        className={`${variantClasses[variant]} font-medium py-2 px-4 rounded w-full ${className}`}
      >
        {props.children}
        </button>
  )
})
