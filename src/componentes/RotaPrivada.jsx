import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './Autenticacao';
import Cabecalho from './Cabecalho';

function RotaPrivada() {
    let estaAutenticado = useAuth();

    if (estaAutenticado) {
        return (
            <>
                <Cabecalho />
                <Outlet />
            </>
        );
    }
    return <Navigate to="/login" />;
}

export default RotaPrivada;