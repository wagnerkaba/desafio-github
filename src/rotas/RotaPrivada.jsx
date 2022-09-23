import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/Autenticacao';
import DrawerResponsivo from '../componentes/drawer/DrawerResponsivo';
import Box from '@mui/material/Box';

function RotaPrivada() {
    let auth = useAuth();

    // se usuario esta logado, mostra a página privada
    if (auth.user) {
        return (

            <Box sx={{ display: 'flex' }}>
                <DrawerResponsivo />
                <Outlet />
            </Box>

        );
    }

    // se usuário não está logado, ele é redirecionado para login
    return (
        <>
            <Navigate to="/" />
        </>

    );
}

export default RotaPrivada;