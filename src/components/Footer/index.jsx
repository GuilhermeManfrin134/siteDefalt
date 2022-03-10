import { Link } from 'react-router-dom';
import icon from '../../assets/ICONE DO SITE 2.png';

//Componentes de Estilização
import { About, Back, Foot, Icon, Left, Options, Right, Text, Up } from './styles';

export default function Footer(){
    return(
        <Foot>
            <Up>
                <Left>
                    <Icon>
                        <Link to='/'>
                            <img src={icon} alt='ICONE'/>
                        </Link>
                    </Icon>
                    <Text>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, officia deserunt harum, recusandae quam quod praesentium, beatae doloremque perspiciatis dolor sunt? Id illum, consectetur cumque cupiditate molestias dignissimos ducimus omnis.
                    </Text>
                </Left>
                <Right>
                    <About>
                        <h3>Sobre</h3>
                        <Options>
                            <Link to='/'>
                                Nós
                            </Link>
                            <Link to='/'>
                                Equipe
                            </Link>
                            <Link to='/'>
                                Contato
                            </Link>
                        </Options>
                    </About>
                </Right>
            </Up>
            <Back>
                <p>
                    Designed By Guilherme Manfrin Pereira
                    <p>Copyright ©2022</p>
                </p>
            </Back>
        </Foot>
    )
}