import styled from 'styled-components';

export const Head = styled.header`

    width: 100%;
    height: 80px;
    background: var(--corPrimaria);
    display: flex;
    justify-content: center;

`;

export const HeadNav = styled.div`

    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
        width: 75px;
    }


`;

export const Icon = styled.div`

    width: 200px;
    height: 80px;
    display: flex;
    justify-content: left;

`;

export const SocialMedias = styled.div`

    width: 200px;
    height: 80px;
    display: flex;
    justify-content: space-around;

    a{
        color: #FFF;
        font-size: 30px;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: ease-in-out .1s;
        display: flex;
        justify-content:space-between;
        align-items: center;

        svg{
            padding-right: 5px;
            padding-left: 5px;
        }
        svg:hover{
            color: var(--clickColor);
            font-size: 28px;
        }
    }

`;