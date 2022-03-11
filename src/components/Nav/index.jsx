import { ImSearch } from "react-icons/im";
import { Link } from "react-router-dom";

//Componentes de Estilização
import { Navigator, NavPrincipal, NavItens, NavItem, NavSearch, Search } from './styles';

export default function Nav(){
    return(
        <Navigator>
            <NavPrincipal>
                <NavItens>
                    <NavItem>
                        <Link to='/'>
                            Anime
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/'>
                            Mangá
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/'>
                            Filme
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/'>
                            Série
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/'>
                            HQ
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/'>
                            Podcast
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/'>
                            Reacts
                        </Link>
                    </NavItem>
                </NavItens>
                <NavSearch>
                    <Search>
                        <ImSearch size={20}/>
                        <input type='text' placeholder="Ex: Anime"/>
                    </Search>
                </NavSearch>
            </NavPrincipal>
        </Navigator>
    )
}