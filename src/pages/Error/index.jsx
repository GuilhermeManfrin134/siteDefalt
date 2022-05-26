import { Link } from "react-router-dom";

//Importando Componentes de Estilização
import { ErrorPage, ErrorText } from "./styles";

export default function Error(){
    return(
        <ErrorPage>
            <ErrorText>OPS!!! Página não encontrada...</ErrorText>
            <ErrorText>
                <Link to='/'>Gostaria de voltar a página inicial?</Link> 
            </ErrorText>
        </ErrorPage>
    )
}