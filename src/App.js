import { BrowserRouter } from 'react-router-dom';

//ROTAS
import Routes from './routes';

//ESTILIZAÇÃO
import './App.css';

//Importando COMPONENTES
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
