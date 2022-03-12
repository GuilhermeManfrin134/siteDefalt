import styled from "styled-components";

export const SectionBanner = styled.section`
    width: 100%;
    border-radius: 10px;

    display: flex;
    flex-wrap: nowrap;
    
    overflow-x: auto;
    overflow-y: auto;
    scroll-behavior: smooth;
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

export const SettingButtons = styled.div`
    display: flex;
    justify-content: space-between;

    width: 60px;
    height: auto;
`;

export const ButtonRight = styled.button`
    background-color: transparent;

    img{
        width: 100%;
        height: auto;

            
        -moz-transition: ease-in-out 0.1s;
        -webkit-transition: ease-in-out 0.1s;
        transition: ease-in-out 0.1s;

        -moz-transform: scale(1);
        -webkit-transform: scale(1);
        transform: scale(1);

        width: 100%;
        height: auto;

        :hover{
            cursor: pointer;
            -moz-transform: scale(1.3);
            -webkit-transform: scale(1.3);
            transform: scale(1.3);     
        }
    }
`;
export const ButtonLeft = styled.button`
    background-color: transparent;
        transform: rotate(180deg);

    img{
        width: 100%;
        height: auto;
                
        -moz-transition: ease-in-out 0.1s;
        -webkit-transition: ease-in-out 0.1s;
        transition: ease-in-out 0.1s;

        -moz-transform: scale(1);
        -webkit-transform: scale(1);
        transform: scale(1);
        
        width: 100%;
        height: auto;

        :hover{
            cursor: pointer;
            -moz-transform: scale(1.3);
            -webkit-transform: scale(1.3);
            transform: scale(1.3);    
        }
    }
`;

export const CarouselSection = styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%;
`; 

