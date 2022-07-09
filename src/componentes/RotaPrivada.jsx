import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './Autenticacao';
import Cabecalho from './Cabecalho';

function RotaPrivada() {
    let auth = useAuth();

    // se usuario esta logado, mostra a página privada
    if (auth.user) {
        return (
            <>
                <Cabecalho />
                <Outlet />
            </>
        );
    }

    // se usuário não está logado, ele é redirecionado para login
    return <Navigate to="/login" />;
}

export default RotaPrivada;