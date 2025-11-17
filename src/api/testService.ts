import { http } from "./http";

export const getTests = async () => {
  try {
    const { data } = await http.get("/tests");
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getTestDetail = async (id: string) => {
  try {
    const { data } = await http.get(`/tests/${id}`);
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
