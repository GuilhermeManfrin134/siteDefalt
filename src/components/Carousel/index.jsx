import { useEffect, useState, useRef } from 'react';

//Componentes de Estilização
import { 
    SectionBanner, ContentBanner, ImageBanner, 
    TitleBanner, CarouselSection, CarouselBanner, 
    Chevron, ButtonChevron
} from './styles.js';

//Importando ICONES
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Carousel(){

    const [data, setData] = useState([]);
    const [seconds, setSeconds] = useState(0);
    const carousel = useRef(null);

    useEffect(() => {
        fetch('http://localhost:3000/apiTeste.json')
        .then((response) => response.json())
        .then(setData)
    }, []);
    
    const handleLeftClick = (e) => {
        e.preventDefault();

        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
    
    const handleRightClick = (e) => {
        e.preventDefault();
        
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }

    useEffect(() => {

        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000)
        return () => clearInterval(interval);

    }, []);

    useEffect(()=>{
        
        carousel.current.scrollLeft += carousel.current.offsetWidth;
        if(seconds === data.length){
            carousel.current.scrollLeft = 0;
            setSeconds(seconds => seconds = 0);
        }

    }, [seconds, data])

    if(!data && !data.length) return null;

    return(
        <CarouselSection>
            <Chevron>
                <ButtonChevron onClick={handleLeftClick}>
                    <FaChevronLeft/>
                </ButtonChevron>
            </Chevron>
            <SectionBanner ref={carousel}>
                {data.map((item) => {
                    return(
                        <CarouselBanner key={item.id}>
                            <ContentBanner>
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
                <ButtonChevron onClick={handleRightClick}>
                    <FaChevronRight/>
                </ButtonChevron>
            </Chevron>
        </CarouselSection>
    )
}