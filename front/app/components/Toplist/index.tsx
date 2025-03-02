'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import { useApp } from "@/app/context";
import { MainSection, MenuButton } from "@/app/styles/toplist";


export default function Toplist() {
    const { page, setPage, playSound, records, setRecords } = useApp();
    const STORAGE_KEY = "MemoryMathResults;"

    useEffect(() => {
        {if(page === "toplist")
            if (typeof window !== "undefined") {
                const storedResults = localStorage.getItem(STORAGE_KEY);
                if (storedResults) setRecords(JSON.parse(storedResults));
        }}
    }, [page]);
  return (
    <MainSection>
      <Image src="/icon.png" alt="Logo da minha aplicação" width={100} height={100} priority={true}/>
        <h1>Top 10 list</h1>
        <p>Your best results:</p>
        {records.length > 0 ? (
            <ul>{records.slice()
                .sort((a, b) => {
                  if (a.level !== b.level) return b.level - a.level;
                  return b.points - a.points; 
                })
                .slice(0, 10)
                .map((res, index) => (
                <li key={index}>
                    {new Date(res.date).toLocaleString()}<br />Level {res.level} | {res.points} Points
                </li>
            ))}</ul>
        ) : (<p>No results yet!</p>)}
        <MenuButton onClick={() => {
        playSound("/audio/click.wav");
            setPage("home");
        }}>
            Back
        </MenuButton>
    </MainSection>
  );
}