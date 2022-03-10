//ESTILIZAÇÃO
import './body.css';

//Importando COMPONENTES
import Banner from "../Banner";
import Main from "../Main";
import Podcast from "../Podcast";

export default function Body(){
    return(
        <div className="body-page">
            <section className='banner'>
                <Banner/>
            </section>
            <main className='main'>
                <Main/>
            </main>
            <aside className='podcast'>
                <Podcast/>  
            </aside>
        </div>
    )
}