'use client'
import Image from "next/image";
import { useState } from "react";
import { useApp } from "@/app/context";
import { MainSection, MenuButton } from "@/app/styles/menu";

export default function Menu() {
  const { setPage, playSound, setOver, load, setLoad, setLife } = useApp();
  
  return (
    <MainSection>
      <Image src="/logo.png" alt="Logo da minha aplicação" width={200} height={175} priority={true}/>
      { load ? (
        <>
          <MenuButton onClick={() => {playSound("/audio/click.wav"), setPage("game"), setOver(false), setLife(2)}}>
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