import styled from "styled-components";

export const MiniPodcastView = styled.div`
    width: 100%;
    height: auto;
    max-height: 250px;
`;

export const MiniPodcastImage = styled.div`
    width: 100%;
    max-height: 100%;

    img{
        width: 100%;
    }
`;

export const MiniPodcastFunctions = styled.div`
    width: 100%;
    height: 50px;
    margin-top: -50px;
    box-sizing: border-box;
    padding: 0 10px;
    background-color: var(--tertiaryColor);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const MiniPodcastTitle = styled.div`
    max-height: 50px;
    background-color: var(--secondaryColor);
    padding: 5px;
    color: #FFF;
    text-align: justify;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 15px;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2; 
    -webkit-box-orient: vertical;
`;

export const MiniPodcastPlayer = styled.div`
    width: 10%;
    display: flex;
    justify-content: center;

    svg{
        width: 100%;
        height: 100%;
        color: var(--primaryColor);
        -moz-transition: ease-in-out 0.3s;
        -webkit-transition: ease-in-out 0.3s;
        transition: ease-in-out 0.3s;

        :hover{
            color: var(--clickColor);
            cursor: pointer;
        }
    }
`;

export const MiniPodcastAudio = styled.div`
    width: 50%;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const MiniVolume = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;

    input[type="range"]{
        width: 100%;
        height: 2px;
    }

    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        border: none;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: var(--primaryColor);
    }

    input[type="range"]::-moz-range-thumb{
        -webkit-appearance: none;
        border: none;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: var(--primaryColor);
    }
    input[type="range"]::-ms-thumb{
        -webkit-appearance: none;
        border: none;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: var(--primaryColor);
    }
`;

export const MiniPodcastVolume = styled.div`
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5px;

    
    svg{
        width: 100%;
        height: 100%;
        color: var(--primaryColor);
        transform: rotate(180deg);
        -moz-transition: ease-in-out 0.3s;
        -webkit-transition: ease-in-out 0.3s;
        transition: ease-in-out 0.3s;

        :hover{
            color: var(--clickColor);
            cursor: pointer;
        }
    }
`;

export const MiniPodcastTime = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--primaryColor);
`;

export const MiniTime = styled.div`
    padding: 0 10px;
    font-size: 100%;
    color: #FFF;
    font-weight: bold;
    width: 10%;
    display: flex;
    justify-content: center;
`;

export const MiniTimer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;

    input[type="range"]{
        width: 100%;
        height: 5px;
    }
    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        border: none;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: var(--tertiaryColor);
    }
    input[type="range"]::-moz-range-thumb {
        -webkit-appearance: none;
        border: none;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: var(--tertiaryColor);
    }
    input[type="range"]::-ms-thumb {
        -webkit-appearance: none;
        border: none;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: var(--tertiaryColor);
    }
`;