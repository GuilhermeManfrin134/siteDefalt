import { useEffect, useState } from 'react';

//Componentes de Estilização
import { 
    SectionBanner, ContentBanner, ImageBanner, 
    TitleBanner, CarouselSection, CarouselBanner, 
    Chevron, ButtonChevron
} from './styles.js';

//Importando ICONES
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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
            <Chevron>
                <ButtonChevron>
                    <FaChevronLeft />
                </ButtonChevron>
            </Chevron>
            <SectionBanner>
                {data.map((item) => {
                    return(
                        <CarouselBanner>
                            <ContentBanner key={item.id}>
                                <ImageBanner foto={item.foto}>
                                    <TitleBanner>
                                        <p>{item.titulo}</p>
                                    </TitleBanner>
                                </ImageBanner>
                            </ContentBanner>
                        </CarouselBanner>
                    )
                })}
            </SectionBanner>
            <Chevron>
                <ButtonChevron>
                    <FaChevronRight />
                </ButtonChevron>
            </Chevron>
        </CarouselSection>
    )
}