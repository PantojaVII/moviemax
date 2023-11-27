import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import UserI from "../../Interfaces/UserI";
import http from "../../http";
import { useNavigate } from "react-router-dom";

interface AuthProviderType {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: AuthProviderType) {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserI | null>(null);

  useEffect(() => {
    // Recupere o token da sessionStorage
    const token = sessionStorage.getItem("token");

    if (token) {
      
    } else {
      // O usuário não está logado
      
      setUser(null);
      navigate("/"); // Substitua "/login" pelo caminho real da página de login
      
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
