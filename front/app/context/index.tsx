"use client";

import { createContext, useContext, ReactNode, useState } from "react";

// Tipagem das funções e estados que o contexto vai fornecer
interface AppContextType {
    page: string;
    setPage: (page: string) => void;
    playSound: (src: string) => void;
}

// Criando o contexto com valores padrão
const AppContext = createContext<AppContextType | undefined>(undefined);

// Criando o Provider do contexto
export function AppProvider({ children }: { children: ReactNode }) {
    const [page, setPage] = useState("home");
    
    const playSound = (src: string) => {
      const sound = new Audio(src);
      sound.play();
    };

  return (
    <AppContext.Provider value={{ page, setPage, playSound }}>
      {children}
    </AppContext.Provider>
  );
}

// Hook para acessar o contexto
export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp deve ser usado dentro de um AppProvider");
  }
  return context;
}
