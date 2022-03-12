import { useEffect, useState } from 'react';

//Componentes de Estilização
import { SectionBanner, ContentBanner, ImageBanner, TituloBanner } from './styles.js';

export default function Banner(){

    const [data, setData] =useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/apiTeste.json')
        .then((response) => response.json())
        .then(setData)
    }, [])

    if(!data && !data.length) return null;
    
    return(
        <SectionBanner>
            {data.map((item) => {
                return(
                    <ContentBanner key={item.id}>
                        <ImageBanner foto={item.foto}>  
                            <TituloBanner>
                                <p>{item.titulo}</p>
                            </TituloBanner>
                        </ImageBanner>
                    </ContentBanner>
                )
            })}

        </SectionBanner>
    )
}