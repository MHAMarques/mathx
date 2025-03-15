'use client'
import Image from "next/image";
import { useEffect } from "react";
import { useApp } from "@/app/context";
import { MainSection, MenuButton } from "@/app/styles/menu";

export default function Menu() {
  const { language, setLanguage, content, setContent, setPage, playSound, setOver, load, setLoad, setLife, setLevel, setPoints } = useApp();
  useEffect(() => {
    if(language === 'pt'){
      setContent({
        start: 'Escolha um numero',
        quest: 'Qual o resultado?',
        yes: 'Correto!',
        no: 'Errado!',
        lvl: 'Nivel',
        pts: 'Pontos',
        lif: 'Tentativas',
        end: 'Fim de Jogo',
        ply: 'Jogar',
        how: 'Regras',
        bak: 'Voltar'
      });
    }
    else if(language === 'en'){
      setContent({
        start: 'Pick a number',
        quest: 'The result is?',
        yes: 'Correct!',
        no: 'Wrong!',
        lvl: 'Level',
        pts: 'Points',
        lif: 'Attempts',
        end: 'Game Over',
        ply: 'Play',
        how: 'Rules',
        bak: 'Back'
      });
    }
  }, [language, setContent]);
  
  return (
    <MainSection>
      <Image src="/logo.png" alt="Logo da minha aplicação" width={400} height={350} priority={true}/>
      { load ? (
        <>
          <MenuButton onClick={() => {
            playSound("/audio/click.wav");
            setPage("how");
          }}>
            {content.how}
          </MenuButton>
          <MenuButton onClick={() => {
            playSound("/audio/click.wav");
            setPage("game");
            setOver(false);
            setLife(4);
            setLevel(1);
            setPoints(0);
          }}>
            {content.ply}
          </MenuButton>
          <MenuButton onClick={() => {
            playSound("/audio/click.wav");
            setPage("toplist");
          }}>
            Top 10
          </MenuButton>
        </>
      ) : (
        <>
          <MenuButton onClick={() => {
            playSound("/audio/game_intro.wav");
            setLanguage("pt");
            setLoad(true);
          }}>
            Portugues
          </MenuButton>
          <MenuButton onClick={() => {
            playSound("/audio/game_intro.wav");
            setLanguage("en");
            setLoad(true);
          }}>
            English
          </MenuButton>
        </>
      ) }

    </MainSection>
  );
}