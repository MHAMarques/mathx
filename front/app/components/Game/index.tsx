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
    leftEnd: string;
    dotColor: number;
  };

  const { 
    playSound,
    level,
    setLevel,
    points,
    setPoints,
    life,
    setLife,
    opera,
    setOpera,
    help,
    setHelp
  } = useApp();
  const [ load, setLoad ] = useState(true);
  const [dots, setDots] = useState<Dot[]>([]);

  const setClickSound = (level: number) => {
      const choice = Math.floor(Math.random() * 2)
      const chord = Math.floor(Math.random() * 2)
      if(level === 1){
        switch (choice) {
          case 0:
            if(chord === 0) return "/audio/birth_A2.wav";
            if(chord === 1) return "/audio/birth_Cs2.wav";
            if(chord === 2) return "/audio/birth_E2.wav";
          
          case 1:
            case 0:
            if(chord === 0) return "/audio/birth_A3.wav";
            if(chord === 1) return "/audio/birth_Cs3.wav";
            if(chord === 2) return "/audio/birth_E3.wav";
          
          case 2:
            case 0:
            if(chord === 0) return "/audio/birth_A4.wav";
            if(chord === 1) return "/audio/birth_Cs4.wav";
            if(chord === 2) return "/audio/birth_E4.wav";
        }
      }

      if(level === 2){
        switch (choice) {
          case 0:
            if(chord === 0) return "/audio/birth_B2.wav";
            if(chord === 1) return "/audio/birth_Ds2.wav";
            if(chord === 2) return "/audio/birth_Fs2.wav";
            break;
          
          case 1:
            case 0:
            if(chord === 0) return "/audio/birth_B3.wav";
            if(chord === 1) return "/audio/birth_Ds3.wav";
            if(chord === 2) return "/audio/birth_Fs3.wav";
            break;
          
          case 2:
            case 0:
            if(chord === 0) return "/audio/birth_B4.wav";
            if(chord === 1) return "/audio/birth_Ds4.wav";
            if(chord === 2) return "/audio/birth_Fs4.wav";
            break;
          default:
            break;
        }
      }

      return '';
  };

  const handleRemoveDot = (id: number, value: number, level: number) => {
    playSound(setClickSound(level))
    setDots((prevDots) => prevDots.filter((dot) => dot.id !== id));
  };

  const spawnSpeed = (level: number) => {
    if(level < 10) return 4000;
    else if(level < 20) return 3000;
    else if(level < 30) return 2000;
    else return 1000;
  };

  useEffect(() => {
    const addDotInterval = setInterval(() => {
      const leftStart = `${Math.random() * 100}%`; // Posição inicial aleatória no eixo X
      const leftVariation = (Math.random() - 0.5) * 50; // Define se vai mover para esquerda ou direita (-25% a +25%)
      const leftEnd = `calc(${leftStart} + ${leftVariation}%)`; // Posição final no eixo X
      const dotColor = Math.floor(Math.random() * 32) + 1;//Escolhe cor da bola

      setDots((prevDots) => [
        ...prevDots,
        {
          id: Date.now(),
          value: Math.floor(Math.random() * (level*5)) + 1,
          left: leftStart,
          leftEnd,
          dotColor
        }
      ]);
    }, spawnSpeed(level));

    const removeOldDotsInterval = setInterval(() => {
      setDots((prevDots) => prevDots.slice(1)); // Remove o mais antigo
    }, 30000);

    return () => {
      clearInterval(addDotInterval);
      clearInterval(removeOldDotsInterval);
    };
  }, []);

  useEffect(() => {

  }, [handleRemoveDot]);
  
  return (
    <MainContainer>
      { load ? (
        <>
            <TopSection $level={level}>
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
            {dots.map(({id, value, left, leftEnd, dotColor}) => (
              <AnimatedDot key={id} $left={left} $leftEnd={leftEnd} $dotColor={dotColor} $level={level} onClick={() => handleRemoveDot(id, value, level)}>
                <NumberDot>
                  {value}
                </NumberDot>
              </AnimatedDot>
            ))}
            </MainSection>
            
            
            <BottomSection $level={level}>
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