// src/components/ui/button.tsx
import React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(
        "px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
        "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300",
        "dark:bg-blue-500 dark:hover:bg-blue-600",
        className
      )}
    >
      {children}
    </button>
  );
};