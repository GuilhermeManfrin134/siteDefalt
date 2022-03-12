import styled from "styled-components";

export const SectionBanner = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    border-radius: 10px 10px 0 0;
`;

export const ContentBanner = styled.div`
    width: 100%;
    overflow: hidden;
`;

export const ImageBanner = styled.div`
    display: flex;
    align-items: flex-end;

    width: 100%;
    height: 300px;
    overflow: hidden;
    border-radius: 10px;
    background: url(${props => `${props.foto}`}) no-repeat center;

    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;

    -moz-transform: scale(1);
    -webkit-transform: scale(1);
    transform: scale(1);

    :hover{
        cursor: pointer;
        -moz-transform: scale(0.9);
	    -webkit-transform: scale(0.9);
	    transform: scale(0.9);
    }
`;

export const TituloBanner = styled.div`
    box-sizing: border-box;
    background: rgba(66, 70, 229, 0.9);
    color:#FFF;
    font-weight: 700;
    text-align: justify;
    max-height: 150px;
    max-width: 70%;
    padding: 10px;
    display: flex;
    align-items: center;
    border-radius: 0 10px 10px 0;

    p{
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 25px;
        display: -webkit-box;
        -webkit-line-clamp: 5; /* number of lines to show */
        line-clamp: 5; 
        -webkit-box-orient: vertical;
    }
`;