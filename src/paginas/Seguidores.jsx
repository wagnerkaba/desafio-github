
import React, { useEffect, useState } from "react";
import {
    Avatar,
    Box,
    Container,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Toolbar,
    Typography
} from "@mui/material";
import { useAuth } from '../context/Autenticacao';
import { buscaDadosGithub } from "../servicos/apiGitHub";


const Seguidores = () => {
    const drawerWidth = 240;
    const auth = useAuth();
    const url = `https://api.github.com/users/${auth.user}/followers`;
    const [seguidores, setSeguidores] = useState([]);

    useEffect(
        () => {
            buscaDadosGithub(url, setSeguidores)
        },
        []
    );


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
            <h1>
                Seguidores
            </h1>
            <List dense={false}>
                {
                    seguidores.map((seguidor) => (

                        <ListItem>
                            <ListItemAvatar>
                                <Avatar
                                    alt={seguidor.login}
                                    src={seguidor.avatar_url}
                                />
                            </ListItemAvatar>
                            <ListItemText
                                primary={seguidor.login}
                            />
                        </ListItem>
                    ))
                }
            </List>
        </Box>

    );
}

export default Seguidores;