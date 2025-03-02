'use client'
import Image from "next/image";
import { useApp } from "@/app/context";
import { MainSection, MenuButton } from "@/app/styles/menu";

export default function Menu() {
  const { setPage, playSound, setOver, load, setLoad, setLife, setLevel, setPoints } = useApp();
  
  return (
    <MainSection>
      <Image src="/logo.png" alt="Logo da minha aplicação" width={400} height={350} priority={true}/>
      { load ? (
        <>
          <MenuButton onClick={() => {
            playSound("/audio/click.wav");
            setPage("game");
            setOver(false);
            setLife(2);
            setLevel(1);
            setPoints(0);
          }}>
            Play
          </MenuButton>
          <MenuButton onClick={() => {
            playSound("/audio/click.wav");
            setPage("how");
          }}>
            How
          </MenuButton>
          <MenuButton onClick={() => {
            playSound("/audio/click.wav");
            setPage("records");
          }}>
            Top 10
          </MenuButton>
        </>
      ) : (
        <>
          <MenuButton onClick={() => {
            playSound("/audio/game_intro.wav");
            setLoad(true);
          }}>
            Start
          </MenuButton>
        </>
      ) }

    </MainSection>
  );
}