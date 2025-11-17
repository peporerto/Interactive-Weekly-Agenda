import React from "react";
import clsx from "clsx";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  className?: string;
};

export const Input: React.FC<InputProps> = ({ label, error, className, ...props }) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>}
      <input
        {...props}
        className={clsx(
          "px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600",
          "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100",
          "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
          className
        )}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};