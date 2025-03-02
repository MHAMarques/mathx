'use client'
import { useApp } from "@/app/context";
import Menu from '@/app/components/Menu';
import Game from '@/app/components/Game';
import How from '@/app/components/How';

export default function Home() {
  const { page } = useApp();

  return (
    <>
      {page === "home" ? <Menu /> : null}
      {page === "game" ? <Game /> : null}
      {page === "how" ? <How /> : null}
    </>
  );
}
