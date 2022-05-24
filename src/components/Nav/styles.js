import styled from "styled-components";

export const Navigator = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: var(--secondaryColor);

    @media screen and (max-width: 800px){
        display: none;
    }
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
    -webkit-transition: ease-in-out .1s;
    -moz-transition: ease-in-out .1s;

    a{
        color: #FFF;
        font-weight: 800;
        transition: ease-in-out .1s;
        -webkit-transition: ease-in-out .1s;
        -moz-transition: ease-in-out .1s;
    }
    a:hover{
        color: var(--clickColor);
        font-size: 20px;
    }

    @media screen and (max-width: 799px){
        margin-bottom: 10px;
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

    @media screen and (max-width: 799px){
        width: 100%;
        padding-left: 5px;
        margin-top: 10px;
        margin-bottom: 10px;

        input{
            width: 150px;
        }
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

//Nav Mobile

export const NavigatorIconMobile = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: var(--secondaryColor);
    
    svg{
        padding-left: ${props => `${props.m}`};
        cursor: pointer;
        transition: all .3s;
        -webkit-transition: all .3s;
        -moz-transition: all .3s;

        @media screen and (max-width: 350px){
            padding-left: 10px;
        }
    }

    @media screen and (min-width: 799px){
        display: none;
    }
`;

export const NavigatorMobile = styled.nav`
    box-sizing: border-box;
    display: flex;
    width: 200px;
    height: 300px;
    background-color: var(--secondaryColor);
    margin-top: -40px;
    margin-left: ${props => `${props.ml}`};

    transition: all .3s;
    -webkit-transition: all .3s;
    -moz-transition: all .3s;

    position: absolute;
    z-index: 1;

    @media screen and (min-width: 799px){
        display: none;
    }
    @media screen and (max-width: 350px){
        margin-top: 0;
    }
`;

export const NavPrincipalMobile = styled.section`
    display: flex;
    flex-direction: column;
`;

export const NavItensMobile = styled.ul`
    width: 90%;
    height: 20px;
    padding: 10px;
`;
