
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
    TableBody,
    styled,
    tableCellClasses
} from "@mui/material";
import { useAuth } from '../context/Autenticacao';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


const Home = () => {
    const drawerWidth = 240;
    const auth = useAuth();
    const userGitHub = JSON.parse(localStorage.getItem("userGitHub"));

    const linhas = [
        {
            titulo: 'Repositórios',
            dado: userGitHub.public_repos
        },
        {
            titulo: 'Seguidores',
            dado: userGitHub.followers
        },
        {
            titulo: 'Seguindo',
            dado: userGitHub.following
        }
    ];

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
                                <StyledTableCell colspan="2" align="center">
                                    {auth.user}
                                </StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                linhas.map((linha) => (
                                    <StyledTableRow>
                                        <StyledTableCell>
                                            {linha.titulo}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">
                                            {linha.dado}
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))
                            }
                        </TableBody>
                    </Table>

                </TableContainer>
            </Box>

        </Box>





    );
}

export default Home;