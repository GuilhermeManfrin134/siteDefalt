import foto from '../../assets/fundo_1.jpg';

import './style.css';
//Componentes de Estilização
import { SectionBanner, ContentBanner, ImageBanner, TituloBanner } from './styles.js';

export default function Banner(){
    
    return(
        <SectionBanner>
            <ContentBanner>
                <ImageBanner foto={foto}>  
                    <TituloBanner>
                        <p>Netflix vai exibir Sailor Moon Crystal, Sailor Moon S e três filmes das guerreiras lunares no Brasil</p>
                    </TituloBanner>
                </ImageBanner>
            </ContentBanner>
        </SectionBanner>
    )
}