//ESTILIZAÇÃO
import './body.css';

//Importando COMPONENTES
import Main from "../Main";
import Destaques from "../Destaques";
import Carousel from '../Carousel';

export default function Body(){
    return(
        <div className="body-page">
            <section className='body-banner'>
                <Carousel/>
            </section>
            <aside className='body-destaques'>
                <Destaques/>  
            </aside>
            <main className='body-main'>
                <Main/>
            </main>
        </div>
    )
}