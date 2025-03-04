'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import { useApp } from "@/app/context";
import { MainSection, MenuButton } from "@/app/styles/toplist";

interface topInterface {
  title: string;
  subtitle: string;
  nolist: string
}

export default function Toplist() {
    const { page, setPage, playSound, records, setRecords, language, content } = useApp();
    const STORAGE_KEY = "MemoryMathResults;"
    const [toptext, setToptext] = useState<topInterface> ({
        title: '',
        subtitle: '',
        nolist:''
      });

    useEffect(() => {
        {if(page === "toplist")
            if (typeof window !== "undefined") {
                const storedResults = localStorage.getItem(STORAGE_KEY);
                if (storedResults) setRecords(JSON.parse(storedResults));
        }}
    }, [page, setRecords]);

    useEffect(() => {
      if(language === 'pt'){
        setToptext({
          title: 'Os 10 melhores',
          subtitle: 'Seus melhores resultados',
          nolist: 'Não há resultatos'
        });
      }
      else if(language === 'en'){
        setToptext({
          title: 'Top 10 best',
          subtitle: 'Your best results',
          nolist: 'No results yet'
        });
      }
    }, [language, setToptext]);

  return (
    <MainSection>
      <Image src="/icon.png" alt="Logo da minha aplicação" width={100} height={100} priority={true}/>
        <h1>{toptext.title}</h1>
        <p>{toptext.subtitle}</p>
        {records.length > 0 ? (
            <ul>{records.slice()
                .sort((a, b) => {
                  if (a.level !== b.level) return b.level - a.level;
                  return b.points - a.points; 
                })
                .slice(0, 10)
                .map((res, index) => (
                <li key={index}>
                    {new Date(res.date).toLocaleString()}<br />{content.lvl} {res.level} | {res.points} {content.pts}
                </li>
            ))}</ul>
        ) : (<p>{toptext.nolist}</p>)}
        <MenuButton onClick={() => {
        playSound("/audio/click.wav");
            setPage("home");
        }}>
            {content.bak}
        </MenuButton>
    </MainSection>
  );
}