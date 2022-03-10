import { BrowserRouter } from 'react-router-dom';

//ROTAS
import Routex from './routes/Routex';

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
      <Routex />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
