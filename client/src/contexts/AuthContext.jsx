import { createContext, useContext } from "react";
import api from "../utils/api";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const login = async (e, email, password) => {
    e.preventDefault();
    try {
      // Get CSRF token
      await api.get("sanctum/csrf-cookie");

      // Make the POST request for login
      const response = await api.post("api/login", { email, password });

      console.log("Login successful!", response.data);
    } catch (error) {
      console.log(error.response?.data?.message || "Login failed!");
    }
  };

  return (
    <AuthContext.Provider value={{ login }}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
