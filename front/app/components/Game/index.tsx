'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import { useApp } from "@/app/context";
import { 
    MainContainer, 
    TopSection,
    MainSection,
    BottomSection,
    AnimatedDot,
    NumberDot
} from "@/app/styles/game";

export default function Game() {
  type Dot = {
    id: number;
    value: number;
    left: string;
    topEnd: string;
    leftEnd: string;
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
      const leftStart = `${Math.random() * 100}%`; // Posição inicial aleatória no eixo X
      const topEnd = `${10 + Math.random() * 50}%`; // Altura final aleatória
      const leftVariation = (Math.random() - 0.5) * 50; // Define se vai mover para esquerda ou direita (-25% a +25%)
      const leftEnd = `calc(${leftStart} + ${leftVariation}%)`; // Posição final no eixo X

      setDots((prevDots) => [
        ...prevDots,
        {
          id: Date.now(),
          value: Math.floor(Math.random() * 101),
          left: leftStart,
          topEnd,
          leftEnd,
        }
      ]);
    }, 1000);

    const removeOldDotsInterval = setInterval(() => {
      setDots((prevDots) => prevDots.slice(1)); // Remove o mais antigo
    }, 30000);

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
            {dots.map(({id, value, left, topEnd, leftEnd}) => (
              <AnimatedDot key={id} $left={left} $topEnd={topEnd} $leftEnd={leftEnd}>
                <NumberDot onClick={() => handleRemoveDot(id)}>
                  {value}
                </NumberDot>
              </AnimatedDot>
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