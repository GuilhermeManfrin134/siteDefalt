import { useState } from 'react';

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

    const [isPaused, setIsPaused] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    function handleIsPaused(){
        setIsPaused(!isPaused);
    }

    function handleMuted(){
        setIsMuted(!isMuted)
    }

    return(
        <MiniPodcastView>
            <MiniPodcastTitle>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </MiniPodcastTitle>
            <MiniPodcastImage>
                <img src={img} alt="Imagem de Fundo"/>
                <MiniPodcastFunctions>
                    <MiniPodcastPlayer onClick={handleIsPaused}>
                        {isPaused ? <FaPauseCircle/> : <FaPlayCircle/>}
                    </MiniPodcastPlayer>
                    <MiniPodcastAudio>
                        <MiniVolume>
                            <input type="range" min="0" max="100" id="volume" step="1"/>
                        </MiniVolume>
                        <MiniPodcastVolume onClick={handleMuted}>
                            {isMuted ? <FaVolumeMute /> : <FaVolumeUp/>}
                        </MiniPodcastVolume>
                    </MiniPodcastAudio>
                </MiniPodcastFunctions>
                <MiniPodcastTime>
                    <MiniTime>00:00</MiniTime>
                        <MiniTimer>
                            <input type="range" min="0" max="0" id="seekbar" step="1"/>
                        </MiniTimer>
                    <MiniTime>00:00</MiniTime>
                </MiniPodcastTime>
            </MiniPodcastImage>
        </MiniPodcastView>
    )
}