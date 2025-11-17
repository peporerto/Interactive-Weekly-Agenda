import React from "react";
import clsx from "clsx";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "rounded-2xl shadow-md border border-gray-200 dark:border-gray-700",
        "bg-white dark:bg-gray-900 p-6 transition-all duration-200",
        className
      )}
    >
      {children}
    </div>
  );
};