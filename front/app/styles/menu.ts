import styled from "styled-components"

export const MainSection = styled.div`
    display: flex;
    gap:15px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 90vh;
    padding: 15px 0 50px;
    transition: 5s;
`;

export const MenuButton = styled.button`
    background-color: var(--mainPurple);
    border-radius:5px;
    padding: 10px;
    width:90%;
    max-width:160px;
    color:rgb(64, 3, 161);

    &:hover {
        background-color: var(--hoverPurple);
        color: #000000;
        font-weight: bold;
    }
`;

export const DisclaimerDiv = styled.div`
    position: absolute;
    bottom: 0px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.7);
    color: darkgray;
    font-size: 12px;
    font-family: Arial, sans-serif;

    span {
        font-weight: bold;
        font-size: 13px;
    }
`;