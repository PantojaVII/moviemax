import { createContext, useContext } from "react";
import UserI from "../../Interfaces/UserI";

interface AuthContextType {
  user: UserI | null; // Defina o tipo do usuário ou null
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
/* Aqui, você cria o contexto com a interface que você definiu, inicializado com undefined como valor padrão */

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("Fora do authprovider");
  }
  return context;
}
