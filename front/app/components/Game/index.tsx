'use client'
import Image from "next/image";
import { useState } from "react";
import { useApp } from "@/app/context";
import { 
    MainContainer, 
    TopSection,
    MainSection,
    BottomSection,
    NumberDot
} from "@/app/styles/game";

export default function Game() {
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
                <NumberDot  onClick={() => playSound("/audio/click.wav")}>
                    4
                </NumberDot>
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