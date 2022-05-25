import styled from "styled-components";

export const CarouselSection = styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 40px;
`; 

export const SectionBanner = styled.section`
    width: 100%;
    border-radius: 10px;

    display: flex;
    flex-wrap: nowrap;
    
    overflow-x: auto;
    overflow-y: auto;
    scroll-behavior: smooth;

    ::-webkit-scrollbar{
        display: none;
    }
`;

export const CarouselBanner = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex: none;
`;

export const ContentBanner = styled.div`
    width: 100%;
    overflow: hidden;
`;

export const ImageBanner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    width: 100%;
    height: 300px;
    overflow: hidden;
    border-radius: 10px;
    background: url(${props => `${props.foto}`}) no-repeat;
    background-size: cover;

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

    @media screen and (max-width: 500px){
        height: 200px;
    }
`;

export const TitleBanner = styled.div`
    box-sizing: border-box;
    background: rgb(255, 214, 10, 0.9);
    color:#FFF;
    font-weight: 700;
    text-align: justify;
    max-height: 150px;
    max-width: 70%;
    padding: 10px;
    display: flex;
    align-items: center;
    border-radius: 0 10px 0 0;

    p{
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 25px;
        display: -webkit-box;
        -webkit-line-clamp: 5; /* number of lines to show */
        line-clamp: 5; 
        -webkit-box-orient: vertical;

        -moz-transition: all 0.3s;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
    }

    @media screen and (max-width: 500px){
        max-height: 100px;

        p{
            font-size: 14px;
        }
    }
`;

export const Chevron = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: auto;

    @media screen and (max-width: 600px){
        display: none;
    }
`;

export const ButtonChevron = styled.button`
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 5px;
    width: 40px;
    height: 40px;
    border-radius: 45px;
    background-color: var(--quaternaryColor);
                    
    -moz-transition: ease-in-out 0.1s;
    -webkit-transition: ease-in-out 0.1s;
    transition: ease-in-out 0.1s;

    -moz-transform: scale(1);
    -webkit-transform: scale(1);
    transform: scale(1);

    :hover{
        cursor: pointer;
        -moz-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);  
    }

    :active{
        background-color: var(--secondaryColor);
        color: #FFF;
        -moz-transform: scale(1);
        -webkit-transform: scale(1);
        transform: scale(1);  
    }

    svg{
        width: 100%;
        height: auto;
    }
`;

