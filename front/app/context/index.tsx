"use client";

import { createContext, useContext, ReactNode, useState } from "react";

// Tipagem das funções e estados que o contexto vai fornecer
interface AppContextType {
    playSound: (src: string) => void;
    page: string;
    setPage: (page: string) => void;
    level: number;
    setLevel: (level: number) => void;
    points: number;
    setPoints: (points: number) => void;
    life: number;
    setLife: (life: number) => void;
    help: string;
    setHelp: (help: string) => void;
    opera: string;
    setOpera: (opera: string) => void;
    nextop: string;
    setNextop: (nextop: string) => void;
    oldop: string;
    setOldop: (oldop: string) => void;
    select: number;
    setSelect: (select: number) => void;
    result: number;
    setResult: (result: number) => void;
    over: boolean;
    setOver: (over: boolean) => void;
    load: boolean;
    setLoad: (load: boolean) => void;
}

// Criando o contexto com valores padrão
const AppContext = createContext<AppContextType | undefined>(undefined);

// Criando o Provider do contexto
export function AppProvider({ children }: { children: ReactNode }) {
    const [page, setPage] = useState("home");
    const [level, setLevel] = useState(1);
    const [points, setPoints] = useState(0);
    const [life, setLife] = useState(0);
    const [help, setHelp] = useState('');
    const [opera, setOpera] = useState('');
    const [nextop, setNextop] = useState('');
    const [oldop, setOldop] = useState('');
    const [select, setSelect] = useState(0);
    const [result, setResult] = useState(0);
    const [over, setOver] = useState(false);
    const [load, setLoad] = useState(false);

    const audioPool: HTMLAudioElement[] = [];
    const poolSize = 100;

    if (typeof window !== 'undefined') {
      for (let pools = 0; pools < poolSize; pools++) {
        const audio = new Audio();
        audioPool.push(audio);
      }
    }
    
    const playSound = (src: string) => {
      if (typeof window !== 'undefined') {
        const tempAudio = new Audio();
        tempAudio.src = src;
        tempAudio.load();
      }
      const availableAudio = audioPool.find((audio) => audio.paused);
      if (availableAudio) {
        availableAudio.src = src;
        availableAudio.currentTime = 0;
        availableAudio.play();
      } else {
        console.warn('Não há instâncias de áudio disponíveis no pool.');
      }
    };

  return (
    <AppContext.Provider value={{ playSound, page, setPage, level, setLevel, points, setPoints,
       life, setLife, help, setHelp, opera, setOpera, nextop, setNextop, oldop, setOldop, 
       select, setSelect, result, setResult, over, setOver, load, setLoad }}>
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
