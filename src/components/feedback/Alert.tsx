import React from "react";

export const Alert: React.FC<{ title: string; message: string }> = ({ title, message }) => (
  <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md">
    <p className="font-bold">{title}</p>
    <p>{message}</p>
  </div>
);
