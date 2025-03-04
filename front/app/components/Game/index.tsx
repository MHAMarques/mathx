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
    content,
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
    setLoad,
    saveRecords,
  } = useApp();
  const [dots, setDots] = useState<Dot[]>([]);

  const setClickSound = (level: number) => {
      const chord = Math.floor(Math.random() * 3)
      if(level === 1){
        switch (chord) {
          case 0:
            return "/audio/birth_A4.wav";
          case 1:
            return "/audio/birth_Cs4.wav";
          case 2:
            return "/audio/birth_E4.wav"
        }
      }

      if(level === 2){
        switch (chord) {
          case 0:
            return "/audio/birth_B4.wav";
          case 1:
            return "/audio/birth_Ds4.wav";
          case 2:
            return "/audio/birth_Fs4.wav"
        }
      }

      if(level === 3){
        switch (chord) {
          case 0:
            return "/audio/birth_G4.wav";
          case 1:
            return "/audio/birth_B4.wav";
          case 2:
            return "/audio/birth_D4.wav"
        }
      }

      if(level === 4){
        switch (chord) {
          case 0:
            return "/audio/birth_C4.wav";
          case 1:
            return "/audio/birth_E4.wav";
          case 2:
            return "/audio/birth_G4.wav"
        }
      }

      if(level === 5){
        switch (chord) {
          case 0:
            return "/audio/birth_D4.wav";
          case 1:
            return "/audio/birth_Fs4.wav";
          case 2:
            return "/audio/birth_A4.wav"
        }
      }

      if(level === 6){
        switch (chord) {
          case 0:
            return "/audio/birth_F4.wav";
          case 1:
            return "/audio/birth_A4.wav";
          case 2:
            return "/audio/birth_C4.wav"
        }
      }

      if(level === 7){
        switch (chord) {
          case 0:
            return "/audio/birth_E4.wav";
          case 1:
            return "/audio/birth_Gs4.wav";
          case 2:
            return "/audio/birth_B4.wav"
        }
      }

      if(level === 8){
        switch (chord) {
          case 0:
            return "/audio/birth_D3.wav";
          case 1:
            return "/audio/birth_Fs3.wav";
          case 2:
            return "/audio/birth_A3.wav"
        }
      }

      if(level === 9){
        switch (chord) {
          case 0:
            return "/audio/birth_E3.wav";
          case 1:
            return "/audio/birth_Gs3.wav";
          case 2:
            return "/audio/birth_B3.wav"
        }
      }

      if(level === 10){
        switch (chord) {
          case 0:
            return "/audio/birth_F3.wav";
          case 1:
            return "/audio/birth_A3.wav";
          case 2:
            return "/audio/birth_C3.wav"
        }
      }

      if(level === 11){
        switch (chord) {
          case 0:
            return "/audio/birth_G3.wav";
          case 1:
            return "/audio/birth_B3.wav";
          case 2:
            return "/audio/birth_D3.wav"
        }
      }

      if(level === 12){
        switch (chord) {
          case 0:
            return "/audio/birth_C3.wav";
          case 1:
            return "/audio/birth_E3.wav";
          case 2:
            return "/audio/birth_G3.wav"
        }
      }

      if(level === 13){
        switch (chord) {
          case 0:
            return "/audio/birth_B3.wav";
          case 1:
            return "/audio/birth_Ds3.wav";
          case 2:
            return "/audio/birth_Fs3.wav"
        }
      }

      if(level === 14){
        switch (chord) {
          case 0:
            return "/audio/birth_A3.wav";
          case 1:
            return "/audio/birth_Cs3.wav";
          case 2:
            return "/audio/birth_E3.wav"
        }
      }

      if(level === 15){
        switch (chord) {
          case 0:
            return "/audio/birth_B2.wav";
          case 1:
            return "/audio/birth_Ds2.wav";
          case 2:
            return "/audio/birth_Fs2.wav"
        }
      }

      if(level === 16){
        switch (chord) {
          case 0:
            return "/audio/birth_E2.wav";
          case 1:
            return "/audio/birth_Gs2.wav";
          case 2:
            return "/audio/birth_B2.wav"
        }
      }

      if(level === 17){
        switch (chord) {
          case 0:
            return "/audio/birth_G2.wav";
          case 1:
            return "/audio/birth_B2.wav";
          case 2:
            return "/audio/birth_D2.wav"
        }
      }

      if(level === 18){
        switch (chord) {
          case 0:
            return "/audio/birth_F2.wav";
          case 1:
            return "/audio/birth_A2.wav";
          case 2:
            return "/audio/birth_C2.wav"
        }
      }

      if(level === 19){
        switch (chord) {
          case 0:
            return "/audio/birth_C2.wav";
          case 1:
            return "/audio/birth_E2.wav";
          case 2:
            return "/audio/birth_G2.wav"
        }
      }

      if(level === 20){
        switch (chord) {
          case 0:
            return "/audio/birth_A2.wav";
          case 1:
            return "/audio/birth_Cs2.wav";
          case 2:
            return "/audio/birth_E2.wav"
        }
      }

      if(level === 21){
        switch (chord) {
          case 0:
            return "/audio/birth_D2.wav";
          case 1:
            return "/audio/birth_Fs2.wav";
          case 2:
            return "/audio/birth_A2.wav"
        }
      }

      if(level === 22){
        switch (chord) {
          case 0:
            return "/audio/birth_E3.wav";
          case 1:
            return "/audio/birth_Gs2.wav";
          case 2:
            return "/audio/birth_B3.wav"
        }
      }

      if(level === 23){
        switch (chord) {
          case 0:
            return "/audio/birth_F3.wav";
          case 1:
            return "/audio/birth_A2.wav";
          case 2:
            return "/audio/birth_C3.wav"
        }
      }

      if(level === 24){
        switch (chord) {
          case 0:
            return "/audio/birth_G3.wav";
          case 1:
            return "/audio/birth_B2.wav";
          case 2:
            return "/audio/birth_D3.wav"
        }
      }

      if(level === 25){
        switch (chord) {
          case 0:
            return "/audio/birth_B3.wav";
          case 1:
            return "/audio/birth_Ds2.wav";
          case 2:
            return "/audio/birth_Fs3.wav"
        }
      }

      if(level === 26){
        switch (chord) {
          case 0:
            return "/audio/birth_A3.wav";
          case 1:
            return "/audio/birth_Cs2.wav";
          case 2:
            return "/audio/birth_E3.wav"
        }
      }

      if(level === 27){
        switch (chord) {
          case 0:
            return "/audio/birth_D3.wav";
          case 1:
            return "/audio/birth_Fs2.wav";
          case 2:
            return "/audio/birth_A3.wav"
        }
      }

      if(level === 28){
        switch (chord) {
          case 0:
            return "/audio/birth_C3.wav";
          case 1:
            return "/audio/birth_E2.wav";
          case 2:
            return "/audio/birth_G3.wav"
        }
      }

      if(level === 29){
        switch (chord) {
          case 0:
            return "/audio/birth_F2.wav";
          case 1:
            return "/audio/birth_A3.wav";
          case 2:
            return "/audio/birth_C2.wav"
        }
      }

      if(level === 30){
        switch (chord) {
          case 0:
            return "/audio/birth_G2.wav";
          case 1:
            return "/audio/birth_Cs3.wav";
          case 2:
            return "/audio/birth_D2.wav"
        }
      }

      if(level === 31){
        switch (chord) {
          case 0:
            return "/audio/birth_D2.wav";
          case 1:
            return "/audio/birth_F3.wav";
          case 2:
            return "/audio/birth_A2.wav"
        }
      }

      if(level === 32){
        switch (chord) {
          case 0:
            return "/audio/birth_C2.wav";
          case 1:
            return "/audio/birth_E3.wav";
          case 2:
            return "/audio/birth_G4.wav"
        }
      }

      if(level === 33){
        switch (chord) {
          case 0:
            return "/audio/birth_E2.wav";
          case 1:
            return "/audio/birth_G3.wav";
          case 2:
            return "/audio/birth_B4.wav"
        }
      }

      return "/audio/click.wav";
  };

  const setAnswerSound = (level: number, answer: string) => {
    if(level === 1){
      switch (answer) {
        case 'q':
          return "/audio/answer_Aq.wav";
        case 'y':
          return "/audio/answer_Ay.wav";
        case 'n':
          return "/audio/answer_An.wav"
      }
    }

    if(level === 2){
      switch (answer) {
        case 'q':
          return "/audio/answer_Bq.wav";
        case 'y':
          return "/audio/answer_By.wav";
        case 'n':
          return "/audio/answer_Bn.wav"
      }
    }

    if(level === 3){
      switch (answer) {
        case 'q':
          return "/audio/answer_Gq.wav";
        case 'y':
          return "/audio/answer_Gy.wav";
        case 'n':
          return "/audio/answer_Gn.wav"
      }
    }

    if(level === 4){
      switch (answer) {
        case 'q':
          return "/audio/answer_Cq.wav";
        case 'y':
          return "/audio/answer_Cy.wav";
        case 'n':
          return "/audio/answer_Cn.wav"
      }
    }

    if(level === 5){
      switch (answer) {
        case 'q':
          return "/audio/answer_Cq.wav";
        case 'y':
          return "/audio/answer_Cy.wav";
        case 'n':
          return "/audio/answer_Cn.wav"
      }
    }

    if(level === 6){
      switch (answer) {
        case 'q':
          return "/audio/answer_Fq.wav";
        case 'y':
          return "/audio/answer_Fy.wav";
        case 'n':
          return "/audio/answer_Fn.wav"
      }
    }

    if(level === 7){
      switch (answer) {
        case 'q':
          return "/audio/answer_Eq.wav";
        case 'y':
          return "/audio/answer_Ey.wav";
        case 'n':
          return "/audio/answer_En.wav"
      }
    }

    if(level === 8){
      switch (answer) {
        case 'q':
          return "/audio/answer_Dq.wav";
        case 'y':
          return "/audio/answer_Dy.wav";
        case 'n':
          return "/audio/answer_Dn.wav"
      }
    }

    if(level === 9){
      switch (answer) {
        case 'q':
          return "/audio/answer_Eq.wav";
        case 'y':
          return "/audio/answer_Ey.wav";
        case 'n':
          return "/audio/answer_En.wav"
      }
    }

    if(level === 10){
      switch (answer) {
        case 'q':
          return "/audio/answer_Fq.wav";
        case 'y':
          return "/audio/answer_Fy.wav";
        case 'n':
          return "/audio/answer_Fn.wav"
      }
    }

    if(level === 11){
      switch (answer) {
        case 'q':
          return "/audio/answer_Gq.wav";
        case 'y':
          return "/audio/answer_Gy.wav";
        case 'n':
          return "/audio/answer_Gn.wav"
      }
    }

    if(level === 12){
      switch (answer) {
        case 'q':
          return "/audio/answer_Cq.wav";
        case 'y':
          return "/audio/answer_Cy.wav";
        case 'n':
          return "/audio/answer_Cn.wav"
      }
    }

    if(level === 13){
      switch (answer) {
        case 'q':
          return "/audio/answer_Bq.wav";
        case 'y':
          return "/audio/answer_By.wav";
        case 'n':
          return "/audio/answer_Bn.wav"
      }
    }

    if(level === 14){
      switch (answer) {
        case 'q':
          return "/audio/answer_Aq.wav";
        case 'y':
          return "/audio/answer_Ay.wav";
        case 'n':
          return "/audio/answer_An.wav"
      }
    }

    if(level === 15){
      switch (answer) {
        case 'q':
          return "/audio/answer_Bq.wav";
        case 'y':
          return "/audio/answer_By.wav";
        case 'n':
          return "/audio/answer_Bn.wav"
      }
    }

    if(level === 16){
      switch (answer) {
        case 'q':
          return "/audio/answer_Eq.wav";
        case 'y':
          return "/audio/answer_Ey.wav";
        case 'n':
          return "/audio/answer_En.wav"
      }
    }

    if(level === 17){
      switch (answer) {
        case 'q':
          return "/audio/answer_Gq.wav";
        case 'y':
          return "/audio/answer_Gy.wav";
        case 'n':
          return "/audio/answer_Gn.wav"
      }
    }

    if(level === 18){
      switch (answer) {
        case 'q':
          return "/audio/answer_Fq.wav";
        case 'y':
          return "/audio/answer_Fy.wav";
        case 'n':
          return "/audio/answer_Fn.wav"
      }
    }

    if(level === 19){
      switch (answer) {
        case 'q':
          return "/audio/answer_Cq.wav";
        case 'y':
          return "/audio/answer_Cy.wav";
        case 'n':
          return "/audio/answer_Cn.wav"
      }
    }

    if(level === 20){
      switch (answer) {
        case 'q':
          return "/audio/answer_Aq.wav";
        case 'y':
          return "/audio/answer_Ay.wav";
        case 'n':
          return "/audio/answer_An.wav"
      }
    }

    if(level === 21){
      switch (answer) {
        case 'q':
          return "/audio/answer_Dq.wav";
        case 'y':
          return "/audio/answer_Dy.wav";
        case 'n':
          return "/audio/answer_Dn.wav"
      }
    }

    if(level === 22){
      switch (answer) {
        case 'q':
          return "/audio/answer_Eq.wav";
        case 'y':
          return "/audio/answer_Ey.wav";
        case 'n':
          return "/audio/answer_En.wav"
      }
    }

    if(level === 23){
      switch (answer) {
        case 'q':
          return "/audio/answer_Fq.wav";
        case 'y':
          return "/audio/answer_Fy.wav";
        case 'n':
          return "/audio/answer_Fn.wav"
      }
    }

    if(level === 24){
      switch (answer) {
        case 'q':
          return "/audio/answer_Gq.wav";
        case 'y':
          return "/audio/answer_Gy.wav";
        case 'n':
          return "/audio/answer_Gn.wav"
      }
    }

    if(level === 25){
      switch (answer) {
        case 'q':
          return "/audio/answer_Bq.wav";
        case 'y':
          return "/audio/answer_By.wav";
        case 'n':
          return "/audio/answer_Bn.wav"
      }
    }

    if(level === 26){
      switch (answer) {
        case 'q':
          return "/audio/answer_Aq.wav";
        case 'y':
          return "/audio/answer_Ay.wav";
        case 'n':
          return "/audio/answer_An.wav"
      }
    }

    if(level === 27){
      switch (answer) {
        case 'q':
          return "/audio/answer_Dq.wav";
        case 'y':
          return "/audio/answer_Dy.wav";
        case 'n':
          return "/audio/answer_Dn.wav"
      }
    }

    if(level === 28){
      switch (answer) {
        case 'q':
          return "/audio/answer_Cq.wav";
        case 'y':
          return "/audio/answer_Cy.wav";
        case 'n':
          return "/audio/answer_Cn.wav"
      }
    }

    if(level === 29){
      switch (answer) {
        case 'q':
          return "/audio/answer_Fq.wav";
        case 'y':
          return "/audio/answer_Fy.wav";
        case 'n':
          return "/audio/answer_Fn.wav"
      }
    }

    if(level === 30){
      switch (answer) {
        case 'q':
          return "/audio/answer_Gq.wav";
        case 'y':
          return "/audio/answer_Gy.wav";
        case 'n':
          return "/audio/answer_Gn.wav"
      }
    }

    if(level === 31){
      switch (answer) {
        case 'q':
          return "/audio/answer_Dq.wav";
        case 'y':
          return "/audio/answer_Dy.wav";
        case 'n':
          return "/audio/answer_Dn.wav"
      }
    }

    if(level === 32){
      switch (answer) {
        case 'q':
          return "/audio/answer_Cq.wav";
        case 'y':
          return "/audio/answer_Cy.wav";
        case 'n':
          return "/audio/answer_Cn.wav"
      }
    }

    if(level === 33){
      switch (answer) {
        case 'q':
          return "/audio/answer_Eq.wav";
        case 'y':
          return "/audio/answer_Ey.wav";
        case 'n':
          return "/audio/answer_En.wav"
      }
    }

    return "/audio/click.wav";
  }

  const setLevelSound = (level: number) => {
    if(level === 14 || level === 20 || level === 26)return "/audio/NextLevel_A.wav";
    if(level === 2 || level === 13 || level === 15 || level === 25)return "/audio/NextLevel_B.wav";
    if(level === 3 || level === 11 || level === 17 || level === 24 || level === 30)return "/audio/NextLevel_G.wav";
    if(level === 4 || level === 12 || level === 19 || level === 28 || level === 32)return "/audio/NextLevel_C.wav";
    if(level === 5 || level === 8 || level === 14 || level === 27 || level === 31)return "/audio/NextLevel_D.wav";
    if(level === 6 || level === 10 || level === 18 || level === 23 || level === 29)return "/audio/NextLevel_F.wav";
    if(level === 7 || level === 9 || level === 16 || level === 22 || level === 33)return "/audio/NextLevel_E.wav";

    return "/audio/click.wav";
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
    if(level < 10) return 1200;
    else if(level < 20) return 1000;
    else if(level < 30) return 800;
    else return 500;
  };

  const selectOp = () => {
    const operation = Math.floor(Math.random() * 20)
    if(operation < 10) return '+';
    else if(operation < 14) return '-';
    else if(operation < 17) return 'x';
    else return '=';
  }

  const nextLevel = (level: number, result: number) => {
    if(points + result >= level*100 && level < 33){
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
        setHelp(content.no);
        playSound(setAnswerSound(level,'n'));
        setNextop('+');

        setTimeout(() => { 
          setResult(0);
          setOldop('');
          setOpera('');
          setSelect(0);
        }, 1500);

      } else {
        setHelp(content.yes);
        playSound(setAnswerSound(level,'y'));
        setNextop('+');

        setTimeout(() => { 
          nextLevel(level, result);
        }, 1500);

      }
      setDots([]);
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
      const leftStart = `${Math.random() * 80}%`; // Posição inicial aleatória no eixo X
      const leftVariation = (Math.random() - 0.5) * 50; // Define se vai mover para esquerda ou direita (-25% a +25%)
      const leftEnd = `calc(${leftStart} + ${leftVariation}%)`; // Posição final no eixo X
      const dotColor = Math.floor(Math.random() * 32) + 1;//Escolhe cor da bola

      if(load) playSound('/audio/wall_A.wav')
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
  }, [load, level]);

  useEffect(() => {
    const removeOldDotsInterval = setInterval(() => {
      if(load) setDots((prevDots) => prevDots.slice(dots.length > 10 ? dots.length - 5 : 1))
      else setDots([]);
    }, 30000);

    return () => {
      clearInterval(removeOldDotsInterval);
    };
  }, [load, dots.length]);

  useEffect(() => {
    if(opera === '') {
      setHelp(content.start);
      setNextop(selectOp() === '=' ? '+' : '-');
    }

  }, [opera]);

  useEffect(() => {
    if(opera === '='){
      setHelp(content.quest);
      playSound(setAnswerSound(level,'q'));
      setDots([]);
      console.log('RESULT: ', result)
      for (let bubbles = 0; bubbles <= 10; bubbles++){
        const leftStart = `${Math.random() * 100}%`; // Posição inicial aleatória no eixo X
        const leftVariation = (Math.random() - 0.5) * 50; // Define se vai mover para esquerda ou direita (-25% a +25%)
        const leftEnd = `calc(${leftStart} + ${leftVariation}%)`; // Posição final no eixo X
        const dotColor = Math.floor(Math.random() * 32) + 1;//Escolhe cor da bola
        const randomResult = Math.floor(Math.random() * 5);

        setDots((prevDots) => [
          ...prevDots,
          {
            id: uuidv4(),
            value: bubbles >= 9 ? result : result + randomResult,
            left: leftStart,
            leftEnd,
            dotColor
          }
        ]);
      }
    }
  }, [result, opera]);

  useEffect(() => {
    if(life <= 0) {
      const newRecord = {
        level: level,
        points: points,
        date: new Date().toISOString(),
      };
      saveRecords(newRecord);

      setOver(true);
      setLoad(false);
      setResult(0);
      setOpera('');
      setOldop('');
      setNextop('');
      setDots([]);
      playSound('/audio/game_over.wav')
    }
  }, [life]);
  
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
                    <p></p>{content.lvl}: {level} | {content.pts}: {points} | {content.lif}: {life}
                </div>
            </BottomSection>
        </>
      ) : (
        <MainSection>
          <Image src="/logo.png" alt="Logo da minha aplicação" width={400} height={350} priority={true}/>
          {over ? <h1>{content.end}<br />{content.lvl} {level}<br />{content.pts} {points}</h1> : <h1>{content.lvl} {level}</h1>}
          <MenuButton onClick={() => {
            playSound("/audio/click.wav");
            if (over) setPage("home");
            else setLoad(true);
          }}>
            {over ? content.bak : content.ply}
          </MenuButton>
        </MainSection>
      ) }

    </MainContainer>
  );
}