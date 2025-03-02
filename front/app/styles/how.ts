import styled from "styled-components"

export const MainSection = styled.div`
    display: flex;
    gap:25px;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    min-height: 90vh;
    padding: 15px 0 50px;
    overflow:auto;
    transition: 5s;

    ul{
        display:flex;
        flex-direction: column;
        text-align:left;
        gap: 10px;
        width: 90%;
        max-width: 600px;
        font-size:1rem;
    }

    h1{
        font-size:2rem;
    }
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