import React, { createContext, useState, ReactNode, useContext } from "react";

// Definição da estrutura do contexto
interface SidebarContextProps {
  isOpenMenu: boolean;
  toggleMenu: () => void;
}

// Criação do contexto com um valor inicial indefinido
const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

// Componente que fornece o contexto para toda a aplicação
export const SidebarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <SidebarContext.Provider value={{ isOpenMenu, toggleMenu }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("useSidebarContext must be used within a SidebarProvider");
  }

  return context;
};
