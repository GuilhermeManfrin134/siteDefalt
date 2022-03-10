import { ImSearch } from "react-icons/im";
import { Link } from "react-router-dom";

//ESTILIZAÇÃO
import './nav.css';

export default function Nav(){
    return(
        <nav>
            <aside className="nav-principal">
                <ul className="nav-itens">
                    <li className="nav-item">
                        <Link to='/'>
                            Anime
                        </Link>
                    </li>
                    <div className="nav-item">
                        <Link to='/'>
                            Mangá
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link to='/'>
                            Filme
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link to='/'>
                            Série
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link to='/'>
                            HQ
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link to='/'>
                            Podcast
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link to='/'>
                            Reacts
                        </Link>
                    </div>
                </ul>
                <ul className="nav-search">
                    <div className="search">
                        <ImSearch size={20}/>
                        <input type='text' placeholder="Ex: Anime"/>
                    </div>
                </ul>
            </aside>
        </nav>
    )
}