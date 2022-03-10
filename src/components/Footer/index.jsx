import { Link } from 'react-router-dom';
import icon from '../../assets/ICONE DO SITE 2.png';

//Estilização
import './footer.css';

export default function Footer(){
    return(
        <footer>
            <div className='footer-up'>
                <div className='footer-left'>
                    <div className='footer-icon'>
                        <Link to='/'>
                            <img src={icon} alt='ICONE'/>
                        </Link>
                    </div>
                    <p className='footer-text'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, officia deserunt harum, recusandae quam quod praesentium, beatae doloremque perspiciatis dolor sunt? Id illum, consectetur cumque cupiditate molestias dignissimos ducimus omnis.
                    </p>
                </div>
                <div className='footer-right'>
                    <div className='footer-about'>
                        <h3>Sobre</h3>
                        <div className='footer-about-options'>
                            <Link to='/'>
                                Nós
                            </Link>
                            <Link to='/'>
                                Equipe
                            </Link>
                            <Link to='/'>
                                Contato
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-back'>
                <p>
                    Designed By Guilherme Manfrin Pereira
                    <p>Copyright ©2022</p>
                </p>
            </div>
        </footer>
    )
}