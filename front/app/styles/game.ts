import styled, { keyframes } from "styled-components"

const setLevelColor = (level: number) => {
    switch (level) {
            case 1:
              return '#9966CC';
            case 2:
              return '#8264CE';
            case 3:
              return '#6863CF';
            case 4:
              return '#6180D1';
            case 5:
              return '#6094D2';
            case 6:
              return '#60AAD2';
            case 7:
              return '#60BED2';
            case 8:
              return '#60CDD2';
            case 9:
              return '#5FD3C8';
            case 10:
              return '#5ED5AE';
            case 11:
              return '#5BD78F';
            case 12:
              return '#5BD771';
            case 13:
              return '#8CD959';
            case 14:
              return '#B9D85A';
            case 15:
              return '#DDDA55';
            case 16:
              return '#DDC155';
            case 17:
              return '#DFB553';
            case 18:
              return '#DFA753';
            case 19:
              return '#E09652';
            case 20:
              return '#E17C51';
            case 21:
              return '#E26650';
            case 22:
              return '#E3534F';
            case 23:
              return '#EA4865';
            case 24:
              return '#EE448C';
            case 25:
              return '#F240AF';
            case 26:
              return '#F33FD9';
            case 27:
              return '#F43EF4';
            case 28:
              return '#E33CF7';
            case 29:
              return '#C636FC';
            case 30:
              return '#A433FF';
            case 31:
              return '#9433FF';
            case 32:
              return '#5734FE';
            case 33:
              return '#1000D9';
            default:
              return '#000000';
    }
};

const setLevelSpeed = (level: number) => {
    if(level < 10) return '30s';
    else if(level < 20) return '20s';
    else if(level < 30) return '10s';
    else return '5s';
};

const moveRandom = (leftEnd: string) => keyframes`
  from {
    bottom: -20px;
    left: 0px || righ: 0px;
  }
  to {
    bottom: 110%;
    left: ${leftEnd};
  }
`;

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    height: auto;
    overflow: clip;
`;

export const TopSection = styled.div<{ $level: number }>`
    position: fixed;
    top:0px;
    display: flex;
    gap:15px;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    background-color:  rgba(0, 0, 0, 0.90);
    align-items: center;
    width: 100%;
    max-height:120px;
    padding: 15px;
    z-index: 5;
    @media only screen and (max-width: 600px) {
      font-size: 2rem;
      padding-bottom: 0px;
    }

    .math_box {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        max-width: 100px;
        max-height: 100px;
        width:100%;
        height: 100px;
        border: 10px solid ${(props) => setLevelColor(props.$level)};
        padding: 0px;
        font-size: 3rem;
        font-weight: bold;
        margin-right: 20px;
        padding-bottom: 5px;
        @media only screen and (max-width: 600px) {
          font-size: 2rem;
          padding-bottom: 0px;
        }
    }
    
    .next_box {
        position: absolute;
        top: 8px;
        right: 28px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        background-color: ${(props) => setLevelColor(props.$level)};
        padding-bottom: 5px;
        border-radius: 50%;
        font-size: 2rem;
        font-weight: bold;
        z-index: 2;
        @media only screen and (max-width: 600px) {
          font-size: 1rem;
          padding-bottom: 0px;
        }
    }

    .old_box {
        position: absolute;
        bottom: 0px;
        right: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        background-color: ${(props) => setLevelColor(props.$level)};
        border-radius: 50%;
        font-size: 0.8rem;
        font-weight: bold;
        z-index: 2;
    }

    .help_box {
        display: flex;
        justify-content: start;
        align-items: center;
        width:100%;
        height: 120px;
        padding-left: 20px;
        font-weight: bold;
        font-size: 2rem;
        @media only screen and (max-width: 600px) {
          font-size: 1rem;
        }
    }
`;

export const MainSection = styled.div`
    position: relative;
    display: flex;
    gap:15px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    padding: 15px;
`;

export const BottomSection = styled.div<{ $level: number }>`
    position: fixed;
    bottom:0px;
    display: flex;
    gap:15px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 50px;
    padding: 15px;
    color: white;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    background-color: ${(props) => setLevelColor(props.$level)};
    background: linear-gradient(to bottom, rgb(41, 41, 41), ${(props) => setLevelColor(props.$level)} 8%);
    z-index:3;
`;

export const AnimatedDot = styled.div<{ $left: string; $leftEnd: string; $dotColor: number; $level: number}>`
    position: absolute;
    left: ${(props) => props.$left};
    bottom: -20px;
    width: 100px;
    height: 100px;
    background-color: ${(props) => setLevelColor(props.$dotColor)};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-weight: bold;
    animation: ${(props) => moveRandom(props.$leftEnd)} ${(props) => setLevelSpeed(props.$level)} linear forwards;
    z-index: 1;
`;

export const NumberDot = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75px;
    height: 75px;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    font-size: 1.5rem;
    z-index: 2;
`;