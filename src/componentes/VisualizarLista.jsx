
import React, { useEffect, useState } from "react";
import {
    Avatar,
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemAvatar,
    ListItemText,
    Toolbar,
    Typography
} from "@mui/material";
import { useAuth } from '../context/Autenticacao';
import { buscaDadosGithub, mudaUsuario } from "../servicos/apiGitHub";
import {
    useNavigate
} from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';

let isPeople = false;

const VisualizarLista = ({ tipoLista, titulo }) => {
    const drawerWidth = 240;
    const auth = useAuth();
    const url = `https://api.github.com/users/${auth.user}/${tipoLista}`;
    const [dados, setDados] = useState([]);
    const navigate = useNavigate();
    
    if (tipoLista !== 'repos') isPeople = true; 
    else isPeople = false;

    useEffect(
        () => {
            buscaDadosGithub(url, setDados, isPeople)
        },
        [url]
    );


    return (

        <Box
            component="main"
            sx={{
                flexGrow: 1,
                p: 3,
                mx: "auto",
                width: { sm: `calc(100% - ${drawerWidth}px)` }
            }}
        >
            <Toolbar />
            <Typography variant="h5">
                {titulo}
            </Typography>
            <List dense={false}>
                {
                    dados.map((dado) => (

                        <ListItem
                            divider={true}
                            key={dado.name}
                        >
                            <ListItemButton
                                component="button"
                                onClick={
                                    () => {
                                        if (isPeople) {
                                            mudaUsuario(dado.name, auth.setUser, auth.setAvatar, navigate);
                                        } else {
                                            window.open(dado.html_url,"_blank","noreferrer");
                                        }
                                    }
                                }>
                                <ListItemAvatar>
                                    {
                                        isPeople ? <Avatar alt={dado.name} src={dado.avatar_url} /> : <GitHubIcon />
                                    }

                                </ListItemAvatar>
                                <ListItemText
                                    primary={dado.name}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Box>

    );
}

export default VisualizarLista;