'use client'
import { useApp } from "@/app/context";
import Menu from '@/app/components/Menu'

export default function Home() {
  const { page, setPage } = useApp();

  return (
    <>
      {page === "home" ? <Menu /> : null}
    </>
  );
}
