import styled from "styled-components";

export const Foot = styled.footer`
    width: 100%;
    height: 200px;
    background-color: var(--tertiaryColor);
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 850px){
        height: auto;
    }
`;

export const Up = styled.div`
    box-sizing: border-box;
    width: 95%;
    height: 170px;
    display: flex;
    justify-content: space-around;
    padding: 60px;

    @media screen and (max-width: 850px){
        height: auto;
        padding: 25px 15px 25px;
    }

    @media screen and (max-width: 550px){
        flex-direction: column;
    }
`;

export const Left = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 65%;

    @media screen and (max-width: 850px){
        flex-direction: column;
        align-items: baseline;
        width: 80%;
    }

    @media screen and (max-width: 550px){
        align-items: flex-end;
        width: 100%;
    }
`;

export const Icon = styled.div`
    width: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
        width: 100%;
    }

    @media screen and (max-width: 850px){
        margin-bottom: 15px;
    }
`;

export const Text = styled.div`
    width: 70%;
    text-align: justify;
    color: #FFF;

    @media screen and (max-width: 850px){
        font-size: 18px;
    }

    @media screen and (max-width: 550px){
        width: 90%;
    }
`;

export const Right = styled.div`
    display: flex;
    align-items: center;
    width: 20%;
    color: #FFF;
    
    @media screen and (max-width: 850px){
        font-size: 20px;
        align-items: baseline;

        h3{
            margin-top: 0;
        }
    }
    @media screen and (max-width: 550px){
        width: 100%;

        h3{
            margin-top: 40px;
            color: var(--quaternaryColor)
        }
    }
`;

export const About = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
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
    background-color: var(--primaryColor);
    color: #FFF;
    text-align: center;

    p{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-weight: 600;
    }
`;

export const FootBackText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 600;
    margin-top: 10px;
    margin-bottom: 10px;
`;