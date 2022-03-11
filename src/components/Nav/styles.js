import styled from "styled-components";

export const Navigator = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: var(--corSecundaria);
`;

export const NavPrincipal = styled.section`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
`;

export const NavItens = styled.ul`
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const NavItem = styled.li`
    color: #FFF;
    font-weight: 800;
    transition: ease-in-out .1s;

    a{
        color: #FFF;
        font-weight: 800;
        transition: ease-in-out .1s;
    }
    a:hover{
        color: var(--clickColor);
        font-size: 20px;
    }
`;

export const NavSearch = styled.ul`
    width: 250px;
    display: flex;
    justify-content: space-around;

    input{
        width: 200px;
        height: 15px;
        border-radius: 10px;
        padding: 5px;
        margin-left: 5px;
    }
`;

export const Search = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    svg{
        color: #FFF;
    }
`;
