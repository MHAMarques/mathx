'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import { useApp } from "@/app/context";
import { MainSection, MenuButton } from "@/app/styles/how";
interface rulesInterface {
  title: string;
  subtitle: string;
  reg1: string;
  reg2: string;
  reg3: string;
  reg4: string;
  reg5: string;
  reg6: string;
  reg7: string;
  reg8: string;
  reg9: string;
}
export default function How() {
  const { setPage, playSound, content, language } = useApp();
  const [rules, setRules] = useState<rulesInterface> ({
    title: '',
    subtitle: '',
    reg1: '',
    reg2: '',
    reg3: '',
    reg4: '',
    reg5: '',
    reg6: '',
    reg7: '',
    reg8: '',
    reg9: ''
  });
  useEffect(() => {
    if(language === 'pt'){
      setRules({
        title: 'Como que joga?',
        subtitle: 'Essas são as regras básicas:',
        reg1: 'Não há números negativos. Tudo abaixo de zero é zero!',
        reg2: 'Após o primeiro número, as próximas escolhas vêm com uma operação: Soma, subtração ou multiplicação',
        reg3: 'A operação no meio do circulo pertence ao número que você selecionar.',
        reg4: 'O pequeno circulo da parte de cima é a próxima operação e a de baixo foi a última seleção realizada.',
        reg5: 'Mantenha o resultado na sua memória para que possa escolher a resposta correta quando a pergunta chegar.',
        reg6: 'Você possui algumas tentativas para escolhar a resposta errada para o jogo acabar.',
        reg7: 'Toda resposta correta irá adicionar o resultado aos seus pontos.',
        reg8: 'Você precisa alcançar 100 vezes o seu nível para subir de nível.',
        reg9: 'São 33 níveis. Boa sorte!'
      });
    }
    else if(language === 'en'){
      setRules({
        title: 'How to play?',
        subtitle: 'These are the basic rules:',
        reg1: 'No negative numbers, everything bellow zero is zero!',
        reg2: 'After the first, every number you pick comes with an operation: Add, substract or multiply.',
        reg3: 'The operation in the middle of the circle belongs to the number you will select.',
        reg4: 'In the top is the next operation and bellow the last selection.',
        reg5: 'Keep track of the result in your memory so you can choose the correct answer when the question comes.',
        reg6: 'You have a couple of attempts to answer wrong to game over.',
        reg7: 'Every correct answer will add the result to your points.',
        reg8: 'You need to reach 100 times your level on the points to level up.',
        reg9: 'There are 33 levels. Good luck!'
      });
    }
  }, [language, setRules]);
  
  return (
    <MainSection>
      <Image src="/icon.png" alt="Logo da minha aplicação" width={100} height={100} priority={true}/>
        <h1>{rules.title}</h1>
        <p>{rules.subtitle}</p>
        <ul>
            <li>1. {rules.reg1}</li>
            <li>2. {rules.reg2}</li>
            <li>3. {rules.reg3}</li>
            <li>4. {rules.reg4}</li>
            <li>5. {rules.reg5}</li>
            <li>6. {rules.reg6}</li>
            <li>7. {rules.reg7}</li>
            <li>8. {rules.reg8}</li>
            <li>9. {rules.reg9}</li>
        </ul>
        <MenuButton onClick={() => {
            playSound("/audio/click.wav");
            setPage("home");
        }}>
            {content.bak}
        </MenuButton>
    </MainSection>
  );
}