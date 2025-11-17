import React from "react";
import { motion } from "framer-motion";

export const Toast: React.FC<{ message: string; type?: "success" | "error" }> = ({
  message,
  type = "success",
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className={`fixed bottom-5 right-5 px-4 py-3 rounded-2xl shadow-lg text-white ${
      type === "success" ? "bg-green-500" : "bg-red-500"
    }`}
  >
    {message}
  </motion.div>
);
