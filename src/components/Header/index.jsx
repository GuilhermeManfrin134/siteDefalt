import { Link } from 'react-router-dom';

//Importando Icon
import icon from '../../assets/ICONE DO SITE 2.png';

//Importando ICONES
import { SiAnilist, SiInstagram } from 'react-icons/si';
import { ImYoutube } from 'react-icons/im';

//Componentes de Estilização
import { Head, HeadNav, Icon, SocialMedias } from './styles';

export default function Header(){
    return(
        <Head>
            <HeadNav>
                <Icon>
                    <Link to='/'>
                        <img src={icon} alt='ICONE'/>
                    </Link>
                </Icon>
                <SocialMedias>
                    <Link to='/'>
                        <SiInstagram  size={35}/>
                        <ImYoutube  size={35}/>
                        <SiAnilist size={35}/>
                    </Link>
                </SocialMedias>
            </HeadNav>
        </Head>
    )
}