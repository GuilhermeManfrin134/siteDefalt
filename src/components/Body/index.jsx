//ESTILIZAÇÃO
import './body.css';

//Importando COMPONENTES
import Banner from "../Banner";
import Main from "../Main";
import Destaques from "../Destaques";

export default function Body(){
    return(
        <div className="body-page">
            <section className='body-banner'>
                <Banner/>
            </section>
            <main className='body-main'>
                <Main/>
            </main>
            <aside className='body-destaques'>
                <Destaques/>  
            </aside>
        </div>
    )
}