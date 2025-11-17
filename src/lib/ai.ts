import axios from "axios";
import { API_BASE_URL } from "./constants";

export const analyzeResultWithAI = async (text: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/ai/analyze`, { text });
    return response.data; // Ej: { insights: "...", suggestions: "..." }
  } catch (err) {
    console.error("AI analysis error:", err);
    return { insights: "", suggestions: "" };
  }
};
