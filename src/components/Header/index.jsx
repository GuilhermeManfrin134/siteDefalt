import { Link } from 'react-router-dom';
import icon from '../../assets/ICONE DO SITE 2.png';


//Importando ICONES
import { SiAnilist, SiInstagram } from 'react-icons/si';
import { ImYoutube } from 'react-icons/im';


import './header.css';

export default function Header(){
    return(
        <header>
            <div className='header-nav'>
                <div className='icon'>
                    <Link to='/'>
                        <img src={icon} alt='ICONE'/>
                    </Link>
                </div>
                <div className='social-media'>
                    <Link to='/'>
                        <SiInstagram  size={35}/>
                        <ImYoutube  size={35}/>
                        <SiAnilist size={35}/>
                    </Link>
                </div>
            </div>
        </header>
    )
}