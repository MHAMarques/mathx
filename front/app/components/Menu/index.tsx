'use client'
import Image from "next/image";
import { useState } from "react";
import { useApp } from "@/app/context";
import { MainSection, MenuButton } from "@/app/styles/menu";

export default function Menu() {
  const { page, setPage, playSound } = useApp();
  const [ load, setLoad ] = useState(false);
  
  return (
    <MainSection>
      <Image src="/logo.png" alt="Logo da minha aplicação" width={200} height={100} />
      { load ? (
        <>
          <MenuButton onClick={() => {playSound("/audio/click.wav"), setPage("play")}}>
            Jogar
          </MenuButton>
          <MenuButton onClick={() => {playSound("/audio/click.wav"), setPage("help")}}>
            Ajuda
          </MenuButton>
          <MenuButton onClick={() => {playSound("/audio/click.wav"), setPage("records")}}>
            Recordes
          </MenuButton>
        </>
      ) : (
        <>
          <MenuButton onClick={() => {playSound("/audio/game_intro.wav"), setLoad(true)}}>
            Iniciar
          </MenuButton>
        </>
      ) }

    </MainSection>
  );
}