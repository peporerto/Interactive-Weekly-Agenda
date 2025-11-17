import { http } from "./http";

export const login = async (email: string, password: string) => {
  try {
    const { data } = await http.post("/auth/login", { email, password });
    localStorage.setItem("token", data.token);
    return { success: true, user: data.user, token: data.token };
  } catch (err) {
    console.error(err);
    return { success: false, error: err };
  }
};

export const register = async (name: string, email: string, password: string) => {
  try {
    const { data } = await http.post("/auth/register", { name, email, password });
    return { success: true, user: data.user };
  } catch (err) {
    console.error(err);
    return { success: false, error: err };
  }
};

export const getUserProfile = async () => {
  try {
    const { data } = await http.get("/users/profile");
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
