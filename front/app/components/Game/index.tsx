'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import { useApp } from "@/app/context";
import { 
    MainContainer, 
    TopSection,
    MainSection,
    BottomSection,
    NumberDot
} from "@/app/styles/game";

export default function Game() {
  type Dot = {
    id: number;
    value: number;
    createdAt: number; // Timestamp de criação
  };

  const { 
    playSound,
    level,
    setLevel,
    points,
    setPoints,
    life,
    setLife
  } = useApp();
  const [ load, setLoad ] = useState(true);
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    const addDotInterval = setInterval(() => {
      setDots((prevDots) => [
        ...prevDots,
        { id: Date.now(), value: Math.floor(Math.random() * 101), createdAt: Date.now() }
      ]);
    }, 5000);

    const removeOldDotsInterval = setInterval(() => {
      setDots((prevDots) =>
        prevDots.filter((dot) => Date.now() - dot.createdAt < 30000) // Remove após 30s
      );
    }, 1000); // Verifica a cada 1s

    return () => {
      clearInterval(addDotInterval);
      clearInterval(removeOldDotsInterval);
    };
  }, []);

  const handleRemoveDot = (id: number) => {
    setDots((prevDots) => prevDots.filter((dot) => dot.id !== id));
  };
  
  return (
    <MainContainer>
      { load ? (
        <>
            <TopSection>
                <div className="help_box">
                    Escolha um numero
                </div>

                <div className="math_box">
                    x
                </div>
                <div className="next_box">
                    +
                </div>
            </TopSection>
            
            <MainSection>
            {dots.map((dot) => (
              <NumberDot key={dot.id} onClick={() => handleRemoveDot(dot.id)}>
                {dot.value}
              </NumberDot>
            ))}
            </MainSection>
            
            
            <BottomSection>
                <div>
                    <p></p>Nivel {level} | Pontos: {points} | Tentativas: {life}
                </div>
            </BottomSection>
        </>
      ) : (
        <>
          
        </>
      ) }

    </MainContainer>
  );
}