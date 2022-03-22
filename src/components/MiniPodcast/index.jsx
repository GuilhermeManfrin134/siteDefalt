import { useEffect, useState } from 'react';

//Componentes de Estilização
import { 
    MiniPodcastView, MiniPodcastImage, MiniPodcastFunctions, 
    MiniPodcastTitle, MiniPodcastAudio, MiniPodcastPlayer,
    MiniPodcastTime, MiniTime, MiniTimer, MiniPodcastVolume, MiniVolume
    } from './styles';

//Importando ICONES
import { FaPlayCircle, FaPauseCircle, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

//Importação de Áudio e Imagem
import audio from '../../assets/Audio Teste.mp3';
import img from '../../assets/FundoTeste.png';

export default function MiniPodcast(){

    const [isPaused, setIsPaused] = useState(true);
    const [isNotMuted, setIsNotMuted] = useState(true);
    const [volume, setVolume] = useState(50);

    useEffect(() => {

        const audio = document.getElementById('mini_podcast_audio');
        audio.volume = volume / 100

        const value = document.getElementById('volume');
        value.oninput = () => setVolume(value.value)
        value.onchange = () => setVolume(value.value)

        if(audio.volume > 0){
            setIsNotMuted(true);
            audio.muted = false;
        }
        if(audio.volume === 0){
            setIsNotMuted(false);
        }
    }, [volume]);

    console.log(isNotMuted)

    function handleIsPaused(){
        setIsPaused(!isPaused);

        if(isPaused){
            function playAudio(){
                const audio = document.getElementById('mini_podcast_audio');
                audio.play();
                audio.currentTime = 60
            }

            playAudio();
        }
        if(isPaused === false){
            function pauseAudio(){
                const audio = document.getElementById('mini_podcast_audio');
                audio.pause();
            }

            pauseAudio();
        }
    }

    function handleMuted(){
        
        setIsNotMuted(!isNotMuted)

        const audio = document.getElementById('mini_podcast_audio');
        audio.muted = !audio.muted;
        
        const value = document.getElementById('volume');

        if(!isNotMuted){
            value.value = volume;
        }
        if(isNotMuted){
            value.value = 0;
        }
    }

    return(
        <MiniPodcastView>
            <MiniPodcastTitle>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </MiniPodcastTitle>
            <MiniPodcastImage>
                <img src={img} alt="Imagem de Fundo"/>
                <MiniPodcastFunctions>
                    <MiniPodcastPlayer onClick={handleIsPaused} id="mini_podcast_play">
                        {isPaused ? <FaPlayCircle/> : <FaPauseCircle/>}
                        <audio src={audio} id="mini_podcast_audio">teste</audio>
                    </MiniPodcastPlayer>
                    <MiniPodcastAudio>
                        <MiniVolume>
                            <input type="range" min="0" max="100" id="volume" step="1"/>
                        </MiniVolume>
                        <MiniPodcastVolume onClick={handleMuted}>
                            {isNotMuted ? <FaVolumeUp/> : <FaVolumeMute />}
                        </MiniPodcastVolume>
                    </MiniPodcastAudio>
                </MiniPodcastFunctions>
                <MiniPodcastTime>
                    <MiniTime>00:00</MiniTime>
                        <MiniTimer>
                            <input type="range" min="0" max="100" id="seekbar" step="1"/>
                        </MiniTimer>
                    <MiniTime>00:00</MiniTime>
                </MiniPodcastTime>
            </MiniPodcastImage>
        </MiniPodcastView>
    )
}