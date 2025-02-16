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
    max-width:120px;
    color: #FFFFFF;

    &:hover {
        background-color: var(--hoverPurple);
        color: #000000;
        font-weight: bold;
    }
`;