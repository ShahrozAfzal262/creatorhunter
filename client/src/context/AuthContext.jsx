import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axios";

const Ctx = createContext(null);
export const useAuth = () => useContext(Ctx);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    if (!loading) return;
    api.get("/auth/me")
      .then((r) => setUser(r.data))
      .catch(() => localStorage.removeItem("token"))
      .finally(() => setLoading(false));
  }, []);

  const save = ({ token, user }) => {
    localStorage.setItem("token", token);
    setUser(user);
  };
  const login = async (body) => save((await api.post("/auth/login", body)).data);
  const register = async (body) => save((await api.post("/auth/register", body)).data);
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return <Ctx.Provider value={{ user, loading, login, register, logout }}>{children}</Ctx.Provider>;
}
