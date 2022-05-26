import { Routes, Route } from 'react-router-dom';

//Importando PÁGINAS
import Home from '../pages/Home';
import Error from '../pages/Error';

export default function Routex(){
    return(
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path='*' element={<Error />}/>
        </Routes>
    )
}