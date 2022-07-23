
import React from "react";
import {
    Avatar,
    Box,
    Toolbar,
    Paper,
    TableContainer,
    Table,
    TableRow,
    TableCell
} from "@mui/material";
import { useAuth } from '../context/Autenticacao';


const Home = () => {
    const drawerWidth = 240;
    const auth = useAuth();
    return (

        <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, maxWidth: 'sm', width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
            <Toolbar />

            <Box sx={{ justifyContent: 'space-between' }}>

                <Avatar
                    alt={auth.user}
                    src={auth.avatar}
                    // Para entender mx, vide mui spacing (https://mui.com/system/spacing/)
                    sx={{ mx: "auto", width: 200 , height: 200}}
                />



                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableRow>
                            <TableCell>
                                Username
                            </TableCell>
                            <TableCell>
                                {auth.user}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Repositórios
                            </TableCell>
                            <TableCell>
                                {auth.user}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Seguidores
                            </TableCell>
                            <TableCell>
                                {auth.user}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Seguindo
                            </TableCell>
                            <TableCell>
                                {auth.user}
                            </TableCell>
                        </TableRow>
                    </Table>

                </TableContainer>
            </Box>

        </Box>





    );
}

export default Home;