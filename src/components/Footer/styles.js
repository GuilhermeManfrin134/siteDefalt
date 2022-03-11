import styled from "styled-components";

export const Foot = styled.footer`
    width: 100%;
    height: 200px;
`;

export const Up = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 170px;
    display: flex;
    justify-content: space-between;
    background-color: var(--corSecundaria);
    padding: 60px;
`;

export const Left = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%; 
`;

export const Icon = styled.div`
    width: 200px;
    height: 80px;
    display: flex;
    justify-content: space-between;

    img{
        width: 120px;
    }
`;

export const Text = styled.div`
    width: 80%;
    text-align: justify;
    margin-top: 30px;
    color: #FFF;
`;

export const Right = styled.div`
    display: flex;
    align-items: center;
    width: 40%;
`;

export const About = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items:flex-end;

    h3{
        color: #FFF ;
    }
`;

export const Options = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    a{
        color: #FFF;
        margin-top: 5px;
        font-weight: 600;
        transition: ease-in-out .1s;
    }
    a:hover{
        color: var(--clickColor);
    }
`;

export const Back = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--corPrimaria);
    color: #FFF;

    p{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-weight: 600;
    }
`;