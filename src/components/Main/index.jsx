import { useEffect, useState } from 'react';

//Componentes de Estilização
import { BodyMain, BodyArticles, BodyPublications, ImagePub, TitlePub, TitlePublications } from './styles';

export default function Main(){

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/apiTeste.json')
        .then((response) => response.json())
        .then(setData)
    }, [])

    return(
        <BodyMain>
            
            <TitlePublications>
                Últimas Publicações
            </TitlePublications>
            <BodyPublications>
                {data.map((item) => {
                    return(
                        <BodyArticles key={item.id}>
                            <ImagePub>
                                <img src={item.foto} alt="IMG" />
                            </ImagePub>
                            <TitlePub>
                                {item.titulo}
                            </TitlePub>
                        </BodyArticles>
                    )
                })}
            </BodyPublications>
        </BodyMain>
    )
}