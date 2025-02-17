import styled, { keyframes } from "styled-components"

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    height: auto;
`;

export const TopSection = styled.div`
    position: fixed;
    top:0px;
    display: flex;
    gap:15px;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-height:100px;
    padding: 15px;

    .math_box {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        max-width: 120px;
        max-height: 120px;
        width:100%;
        height: 120px;
        border: 5px solid rgb(214, 32, 32);
        padding: 0px;
        font-size: 2rem;
        margin-right: 20px;
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
        background-color: red;
        border-radius: 50%;
        font-size: 2rem;
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

export const BottomSection = styled.div`
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
    background-color: red;
    z-index:3;
`;

const moveRandom = (topEnd: string, leftEnd: string) => keyframes`
  from {
    bottom: -20px;
    left: 0px || righ: 0px;
  }
  to {
    bottom: 110%;
    left: ${leftEnd};
  }
`;

// Componente do NumberDot com estilos dinâmicos
export const AnimatedDot = styled.div<{ $left: string; $topEnd: string; $leftEnd: string}>`
    position: absolute;
    left: ${(props) => props.$left};
    bottom: -20px;
    width: 40px;
    height: 40px;
    background-color: red;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 18px;
    font-weight: bold;
    animation: ${(props) => moveRandom(props.$topEnd, props.$leftEnd)} 5s linear forwards;
    `;

export const NumberDot = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: red;
    border-radius: 50%;
    font-size: 2rem;
    z-index: 1;
`;