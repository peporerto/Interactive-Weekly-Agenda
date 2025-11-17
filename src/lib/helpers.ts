// Funciones helper genéricas

export const formatDate = (date: string | Date): string => {
  const d = new Date(date);
  return d.toLocaleDateString();
};

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
/**
 * Combina clases de Tailwind de forma segura.
 * Ejemplo:
 * cn("p-4", isActive && "bg-blue-500")
 */
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}