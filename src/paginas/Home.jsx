
import React from "react";
import {
    Avatar,
    Box,
    Toolbar,
    Paper,
    TableContainer,
    Table,
    TableRow,
    TableCell,
    TableHead,
    TableBody
} from "@mui/material";
import { useAuth } from '../context/Autenticacao';


const Home = () => {
    const drawerWidth = 240;
    const auth = useAuth();

    const userGitHub = JSON.parse(localStorage.getItem("userGitHub"));
    console.log(userGitHub);



    return (

        <Box
            component="main"
            sx={{
                flexGrow: 1,
                p: 3,
                maxWidth: '350px',
                mx: "auto",
                width: { sm: `calc(100% - ${drawerWidth}px)` }
            }}
        >
            <Toolbar />

            <Box sx={{ justifyContent: 'space-between' }}>

                <Avatar
                    alt={auth.user}
                    src={auth.avatar}

                    sx={{
                        mx: "auto", // Para entender mx e my, vide mui spacing (https://mui.com/system/spacing/)
                        my: 3,
                        width: 150,
                        height: 150
                    }}
                />



                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    Username
                                </TableCell>
                                <TableCell align="right">
                                    {auth.user}
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    Repositórios
                                </TableCell>
                                <TableCell align="right">
                                    {userGitHub.public_repos}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    Seguidores
                                </TableCell>
                                <TableCell align="right">
                                    {userGitHub.followers}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    Seguindo
                                </TableCell>
                                <TableCell align="right">
                                    {userGitHub.following}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                </TableContainer>
            </Box>

        </Box>





    );
}

export default Home;