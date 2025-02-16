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
  const { page, setPage, playSound } = useApp();
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
                <NumberDot>
                    4
                </NumberDot>
            </MainSection>
            
            <BottomSection>
                <div>
                    <p></p>Nivel 1 | Pontos: 0 | Tentativas: 5
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