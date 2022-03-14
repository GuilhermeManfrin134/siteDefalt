import styled from "styled-components";

export const BodyMain = styled.main`
    width: 100%;
    height: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const BodyPublications = styled.div`
    width: 100%;
    height: auto;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const TitlePublications = styled.h2`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    width: 100%;

    border-bottom: 2px solid #000;
`;

export const BodyArticles = styled.article`
    width: 49%;
    height: auto;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: justify;
    cursor: pointer;
`;

export const ImagePub = styled.div`
    width: 100%;
    height: 100%;
    
    img{
        width: 100%;
        height: 100%;
    }
`;

export const TitlePub = styled.div`
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    margin-top: -50px;
    padding: 10px;
    background-color: var(--quaternaryColor);
    opacity: .8;
    font-weight: bold;

    max-height: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2; 
    -webkit-box-orient: vertical;

    -webkit-transition: ease-in-out .2s;
    -moz-transition: ease-in-out .2s;
    transition: ease-in-out .2s;

    :hover{
        color: #FFF;
        opacity: 1;
    }
`;