import { BrowserRouter } from 'react-router-dom';

import Routex from './routes/Routex';

import './App.css';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routex />
    </BrowserRouter>
  );
}

export default App;
