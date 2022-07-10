import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './Autenticacao';
import Drawer from './Drawer';

function RotaPrivada() {
    let auth = useAuth();

    // se usuario esta logado, mostra a página privada
    if (auth.user) {
        return (
            <>
                <Drawer />
                <Outlet />
            </>
        );
    }

    // se usuário não está logado, ele é redirecionado para login
    return <Navigate to="/login" />;
}

export default RotaPrivada;