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
    padding: 5px 15px 5px 15px;
    color: #FFF;
    font-weight: bold;
    box-sizing: border-box;
    text-align: justify;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 15px;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2; 
    -webkit-box-orient: vertical;
    border-radius: 10px 10px 0 0;
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
`;

export const SliderVol = styled.input.attrs({ type: 'range' })`
    width: 100%;
    height: 10px;
    border-radius: 4px;
    background: ${(props) =>
        `linear-gradient(to right, 
        var(--primaryColor) 0%,
        var(--primaryColor) ${props.defaultvalue}%, 
        #fff ${props.defaultvalue}%, 
        #fff 100%);`
    };
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);

    ::-webkit-slider-thumb {
        -webkit-appearance: none;
        border: none;
        width: 10px;
        height: 10px;
        background: transparent;
    }
    input[type="range"]::-moz-range-thumb{
        -webkit-appearance: none;
        border: none;
        width: 10px;
        height: 10px;
        background: var(--primaryColor);
    }
    input[type="range"]::-ms-thumb{
        -webkit-appearance: none;
        border: none;
        width: 10px;
        height: 10px;
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
    justify-content: space-around;
    background-color: var(--primaryColor);
    border-radius: 0 0 10px 10px;
`;

export const MiniTime = styled.div`
    padding: 0 10px;
    margin: 0 5px;
    border-radius: 4px;
    font-size: 12px;
    color: #FFF;
    font-weight: bold;
    width: 10%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--secondaryColor);
`;

export const MiniTimer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
`;

export const SliderSeek = styled.input.attrs({type: "range"})` 
    width: 100%;
    height: 5px;
    border-radius: 2px;

    ::-webkit-slider-thumb {
        -webkit-appearance: none;
        border: none;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: var(--secondaryColor);
    }
    ::-moz-range-thumb {
        -webkit-appearance: none;
        border: none;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: var(--secondaryColor);
    }
    ::-ms-thumb {
        -webkit-appearance: none;
        border: none;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: var(--secondaryColor);
    }
`;