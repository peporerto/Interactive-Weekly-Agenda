import { http } from "./http";

export const getResult = async (testId: string) => {
  try {
    const { data } = await http.get(`/results/${testId}`);
    // data puede incluir análisis de IA y score
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

// Ejemplo de llamada a IA externa (OpenRouter / HuggingFace)
export const analyzeResultWithAI = async (text: string) => {
  try {
    const { data } = await http.post("/ai/analyze", { text });
    return data.analysis;
  } catch (err) {
    console.error(err);
    return "Error al analizar";
  }
};
