'use client'
import { useApp } from "@/app/context";
import Menu from '@/app/components/Menu';
import Game from '@/app/components/Game';

export default function Home() {
  const { page, setPage } = useApp();

  return (
    <>
      {page === "home" ? <Menu /> : null}
      {page === "game" ? <Game /> : null}
    </>
  );
}
