'use client'
import Image from "next/image";
import { useApp } from "@/app/context";
import { MainSection, MenuButton } from "@/app/styles/how";

export default function How() {
  const { setPage, playSound } = useApp();
  
  return (
    <MainSection>
      <Image src="/icon.png" alt="Logo da minha aplicação" width={100} height={100} priority={true}/>
        <h1>How to play?</h1>
        <p>These are the basic rules:</p>
        <ul>
            <li>1. No negative numbers, everything bellow zero is zero!</li>
            <li>2. After the first, every number you pick, comes with an operation: Add, Substract or Multiply.</li>
            <li>3. The operation in the middle of the circle belongs to the number you will select.</li>
            <li>4. In the top is the next operation and bellow the last selection.</li>
            <li>5. Keep track of the result in you memory so you can choose the correct answer when the question comes.</li>
            <li>6. You have a couple of attempts to answer wrong to game over.</li>
            <li>7. Every correct answer will add the result to your points.</li>
            <li>8. You need to reach 100 times your level on the points to level up.</li>
            <li>9. There are 33 levels. Good luck!</li>
        </ul>
        <MenuButton onClick={() => {
        playSound("/audio/click.wav");
            setPage("home");
        }}>
            Back
        </MenuButton>
    </MainSection>
  );
}