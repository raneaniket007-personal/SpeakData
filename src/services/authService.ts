import api from "../utils/axiosInterceptor";

export const login = async (username: string, password: string) => {
  const response = await api.post("/login", { username, password });
  return response.data;
};
