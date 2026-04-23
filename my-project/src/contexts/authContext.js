import { createContext, useContext } from "react";

export const AuthContext = createContext({
  user: null,
  setUser: null,
  login: () => {},
  logout: () => {},
});

export default function useAuth() {
  return useContext(AuthContext);
}
