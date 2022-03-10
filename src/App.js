import { BrowserRouter } from 'react-router-dom';

//ROTAS
import Routex from './routes/Routex';

//ESTILIZAÇÃO
import './App.css';

//Importando COMPONENTES
import Header from './components/Header';
import Nav from './components/Nav';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routex />
    </BrowserRouter>
  );
}

export default App;
