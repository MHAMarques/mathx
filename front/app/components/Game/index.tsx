'use client'
import Image from "next/image";
import {v4 as uuidv4} from 'uuid';
import { useState, useEffect } from "react";
import { useApp } from "@/app/context";
import { MenuButton } from "@/app/styles/menu";
import { 
    MainContainer, 
    TopSection,
    MainSection,
    BottomSection,
    AnimatedDot,
    NumberDot
} from "@/app/styles/game";

export default function Game() {
  type Dot = {
    id: string;
    value: number;
    left: string;
    leftEnd: string;
    dotColor: number;
  };

  const { 
    playSound,
    level,
    setLevel,
    points,
    setPoints,
    life,
    setLife,
    help,
    setHelp,
    opera,
    setOpera,
    nextop,
    setNextop,
    oldop,
    setOldop,
    select,
    setSelect,
    result,
    setResult,
    setPage,
    over,
    setOver,
    load,
    setLoad
  } = useApp();
  const [dots, setDots] = useState<Dot[]>([]);

  const setClickSound = (level: number) => {
      const choice = Math.floor(Math.random() * 3)
      const chord = Math.floor(Math.random() * 3)
      if(level === 1){
        switch (choice) {
          case 0:
            if(chord === 0) return "/audio/birth_A2.wav";
            if(chord === 1) return "/audio/birth_Cs2.wav";
            if(chord === 2) return "/audio/birth_E2.wav";
          
          case 1:
            case 0:
            if(chord === 0) return "/audio/birth_A3.wav";
            if(chord === 1) return "/audio/birth_Cs3.wav";
            if(chord === 2) return "/audio/birth_E3.wav";
          
          case 2:
            case 0:
            if(chord === 0) return "/audio/birth_A4.wav";
            if(chord === 1) return "/audio/birth_Cs4.wav";
            if(chord === 2) return "/audio/birth_E4.wav";
        }
      }

      if(level === 2){
        switch (choice) {
          case 0:
            if(chord === 0) return "/audio/birth_B2.wav";
            if(chord === 1) return "/audio/birth_Ds2.wav";
            if(chord === 2) return "/audio/birth_Fs2.wav";
            break;
          
          case 1:
            case 0:
            if(chord === 0) return "/audio/birth_B3.wav";
            if(chord === 1) return "/audio/birth_Ds3.wav";
            if(chord === 2) return "/audio/birth_Fs3.wav";
            break;
          
          case 2:
            case 0:
            if(chord === 0) return "/audio/birth_B4.wav";
            if(chord === 1) return "/audio/birth_Ds4.wav";
            if(chord === 2) return "/audio/birth_Fs4.wav";
            break;
          default:
            break;
        }
      }

      return '';
  };

  const setAnswerSound = (level: number, answer: string) => {
    const choice = Math.floor(Math.random() * 3)
    if(level === 1){
      switch (answer) {
        case 'q':
          return "/audio/answer_Aq.wav";
        case 'y':
          return "/audio/answer_Ay.wav";
        case 'n':
          return "/audio/answer_An.wav";
      }
    }

    if(level === 2){
      switch (answer) {
        case 'q':
          return "/audio/answer_Bq.wav";
        case 'y':
          return "/audio/answer_By.wav";
        case 'n':
          return "/audio/answer_Bn.wav";
      }
    }

    return '';
  }

  const setLevelSound = (level: number) => {
    const choice = Math.floor(Math.random() * 3)
    if(level === 2)return "/audio/NextLevel_B.wav";
    if(level === 3)return "/audio/NextLevel_G.wav";
    return '';
  }

  const calcResult = (result: number, value: number, opera: string) => {
    if(opera === '+'){
      const calc = result + value;
      return calc < 0 ? 0 : calc;
    }
    else if(opera === '-'){
      const calc = result - value;
      return calc < 0 ? 0 : calc;
    }
    else if(opera === 'x'){
      const calc = result * value;
      return calc < 0 ? 0 : calc;
    }
    
    return value;
  }

  const spawnSpeed = (level: number) => {
    if(level < 10) return 2000;
    else if(level < 20) return 1800;
    else if(level < 30) return 1400;
    else return 1000;
  };

  const selectOp = () => {
    const operation = Math.floor(Math.random() * 20)
    if(operation < 10) return '+';
    else if(operation < 14) return '-';
    else if(operation < 17) return 'x';
    else return '=';
  }

  const nextLevel = (level: number, result: number) => {
    if(points + result >= level*100){
      playSound(setLevelSound(level+1))
      setLevel(level+1);
      setPoints(0);
      setResult(0);
      setSelect(0);
      setOldop('');
      setOpera('');
      setLoad(false);
    }
    else{
      setPoints(points + result);
      setResult(0);
      setSelect(0);
      setOldop('');
      setOpera('');
    }
  }

  const selectDot = (id: string, value: number, level: number) => {
    playSound(setClickSound(level));
    setDots((prevDots) => prevDots.filter((dot) => dot.id !== id));
    if(opera === '='){
      if(value !== result){

        setLife(life-1);
        setHelp('Incorreto!');
        playSound(setAnswerSound(level,'n'));
        setNextop('+');
        setDots([]);

        const takeYourTime = setTimeout(() => { 
          setResult(0);
          setOldop('');
          setOpera('');
          setSelect(0);
        }, 1500);

      } else {
        setHelp('Correto!')
        playSound(setAnswerSound(level,'y'));
        setNextop('+');
        setDots([]);

        const takeYourTime = setTimeout(() => { 
          nextLevel(level, result);
        }, 1500);

      }
    }
    else {
      setHelp('');
      setSelect(value);
      setResult(calcResult(result, value, opera))
  
      setOldop(opera);
      setOpera(nextop);
      setNextop(opera === '=' || oldop === '=' ? '+' : selectOp() );
    }
  };

  useEffect(() => {
    const addDotInterval = setInterval(() => {
      const leftStart = `${Math.random() * 100}%`; // Posição inicial aleatória no eixo X
      const leftVariation = (Math.random() - 0.5) * 50; // Define se vai mover para esquerda ou direita (-25% a +25%)
      const leftEnd = `calc(${leftStart} + ${leftVariation}%)`; // Posição final no eixo X
      const dotColor = Math.floor(Math.random() * 32) + 1;//Escolhe cor da bola

      if(load){setDots((prevDots) => [
        ...prevDots,
        {
          id: uuidv4(),
          value: Math.floor(Math.random() * (level*5)) + 1,
          left: leftStart,
          leftEnd,
          dotColor
        }
      ]);}
    }, spawnSpeed(level));

    return () => {
      clearInterval(addDotInterval);
    };
  }, [load]);

  useEffect(() => {
    const removeOldDotsInterval = setInterval(() => {
      load ? setDots((prevDots) => prevDots.slice(dots.length > 10 ? dots.length - 5 : 1)) : setDots([]);
    }, 30000);

    return () => {
      clearInterval(removeOldDotsInterval);
    };
  }, [load]);

  useEffect(() => {
    if(opera === '') {
      setHelp('Escolha um número');
      setNextop(selectOp() === '=' ? '+' : '-');
    }

    if(opera === '='){
      setHelp('Qual o resultado?');
      playSound(setAnswerSound(level,'q'));
      setDots([]);
      let bubbles = 0;

      while(bubbles <= 10){
        const leftStart = `${Math.random() * 100}%`; // Posição inicial aleatória no eixo X
        const leftVariation = (Math.random() - 0.5) * 50; // Define se vai mover para esquerda ou direita (-25% a +25%)
        const leftEnd = `calc(${leftStart} + ${leftVariation}%)`; // Posição final no eixo X
        const dotColor = Math.floor(Math.random() * 32) + 1;//Escolhe cor da bola
        const randomResult = Math.floor(Math.random() * 5);

        setDots((prevDots) => [
          ...prevDots,
          {
            id: uuidv4(),
            value: bubbles === 10 ? result : result + randomResult,
            left: leftStart,
            leftEnd,
            dotColor
          }
        ]);

        bubbles++
      }
    }

    if(life <= 0) {
      setOver(true);
      setLoad(false);
      playSound('/audio/game_over.wav')
    }

    console.log('RESULT: ', result)
  }, [result, opera]);
  
  return (
    <MainContainer>
      { load ? (
        <>
            <TopSection $level={level}>
                <div className="help_box">
                    {help ? help : ''}
                </div>
                <div className="math_box">
                    {opera ? opera : ''}
                </div>
                <div className="next_box">
                    {nextop ? nextop : ''}
                </div>
                <div className="old_box">
                    {select ? oldop + ' ' + select : ''}
                </div>
            </TopSection>
            
            <MainSection>
            {dots.map(({id, value, left, leftEnd, dotColor}) => (
              <AnimatedDot key={id} $left={left} $leftEnd={leftEnd} $dotColor={dotColor} $level={level} onClick={() => selectDot(id, value, level)}>
                <NumberDot>
                  {value}
                </NumberDot>
              </AnimatedDot>
            ))}
            </MainSection>
            
            
            <BottomSection $level={level}>
                <div>
                    <p></p>Nivel {level} | Pontos: {points} | Tentativas: {life}
                </div>
            </BottomSection>
        </>
      ) : (
        <MainSection>
          <Image src="/logo.png" alt="Logo da minha aplicação" width={200} height={175} priority={true}/>
          {over ? <h1>Game Over<br />Level {level}<br />Points {points}</h1> : <h1>Level {level}</h1>}
          <MenuButton onClick={() => {playSound("/audio/click.wav"), over ? setPage("home") : setLoad(true)}}>
            {over ? 'Voltar' : 'Jogar'}
          </MenuButton>
        </MainSection>
      ) }

    </MainContainer>
  );
}