import { useState } from "react";
import { Link } from "react-router-dom";

//Icones
import { ImSearch } from "react-icons/im";
import { HiOutlineViewList } from "react-icons/hi";

//Componentes de Estilização
import { Navigator, NavPrincipal, NavItens, NavItem, NavSearch, Search, NavigatorMobile, NavItensMobile, NavPrincipalMobile, NavigatorIconMobile } from './styles';

export default function Nav(){

    const [navActive, setNavActive] = useState(true);

    function navMobile(){
        setNavActive(!navActive);
    }

    return(
        <>
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
            <NavigatorIconMobile m={navActive ? '10px' : '210px'} >
                <HiOutlineViewList size={35} color='#FFF' onClick={navMobile}/>
            </NavigatorIconMobile>
            <NavigatorMobile ml={navActive ? '-200px' : '0px'}>
                <NavPrincipalMobile>
                    <NavSearch>
                        <Search>
                            <ImSearch size={15}/>
                            <input type='text' placeholder="Ex: Anime"/>
                        </Search>
                    </NavSearch>
                    <NavItensMobile>
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
                    </NavItensMobile>
                </NavPrincipalMobile>
            </NavigatorMobile>
        </>
    )
}