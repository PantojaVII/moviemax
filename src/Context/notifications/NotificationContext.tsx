import React, { createContext, useState, ReactNode, useContext } from "react";
import toast, { Toaster } from 'react-hot-toast';

// Definição da estrutura do contexto
interface NotificationContextValue {
  showToast: (message: string, emoji?: string) => void; // Função para exibir toasts
  openLoad: () => void; // Função para exibir toasts
  dismissToast: () => void; // Função para fechar o toast
}

// Criação do contexto com um valor inicial indefinido
export const NotificationContext = createContext<NotificationContextValue | undefined>(undefined);

// Componente que fornece o contexto para toda a aplicação
export const NotificationContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Função para exibir toasts 
  const openToast = (message: string, emoji?: string) => {
    // Exibe um toast com a mensagem e emoji fornecidos
    toast(message, {
      icon: emoji,
    });
    // Exibe um toast de carregamento se não houver mensagem

  };

  const openLoader = () => {
    toast.loading('Carregando...');
  };
  // Função para fechar o toast de carregamento
  const dismissLoader = () => {
    toast.dismiss();
  };

  // Valor do contexto contendo as funções para exibir e fechar toasts
  const contextValue: NotificationContextValue = {
    showToast: openToast,
    openLoad: openLoader,
    dismissToast: dismissLoader,
  };

  // Retorna o provedor de contexto envolvendo os componentes filhos e o Toaster da biblioteca toast
  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
      <Toaster />
    </NotificationContext.Provider>
  );
};

// Hook personalizado para facilitar o acesso ao contexto
export const useNotification = () => {
  // Obtém o valor do contexto usando o hook useContext
  const context = useContext(NotificationContext);

  // Se o contexto não estiver definido, lança um erro
  if (!context) {
    throw new Error("useNotification must be used within a NotificationContextProvider");
  }

  // Retorna o valor do contexto
  return context;
};
