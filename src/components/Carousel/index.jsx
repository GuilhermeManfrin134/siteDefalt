import { useEffect, useState } from 'react';

//Importando Setas
import button from '../../assets/chevron_icon.png';

//Componentes de Estilização
import { SectionBanner, ContentBanner, ImageBanner, TituloBanner, CarouselSection, CarouselBanner, SettingButtons, ButtonRight, ButtonLeft } from './styles.js';

export default function Carousel(){

    const [data, setData] =useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/apiTeste.json')
        .then((response) => response.json())
        .then(setData)
    }, [])

    if(!data && !data.length) return null;
    
    return(
        <CarouselSection>
            <SettingButtons>
                <ButtonLeft>
                    <img src={button} alt="left" />
                </ButtonLeft>
            </SettingButtons>
            <SectionBanner>
                {data.map((item) => {
                    return(
                        <CarouselBanner>
                            <ContentBanner key={item.id}>
                                <ImageBanner foto={item.foto}>
                                    <TituloBanner>
                                        <p>{item.titulo}</p>
                                    </TituloBanner>
                                </ImageBanner>
                            </ContentBanner>
                        </CarouselBanner>
                    )
                })}
            </SectionBanner>
            <SettingButtons>
                <ButtonRight>
                    <img src={button} alt="ButtonRight" />
                </ButtonRight>
            </SettingButtons>
        </CarouselSection>

    )
}