
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
import { buscaDadosGithub, buscaUsuario } from "../servicos/apiGitHub";
import {
    useNavigate
} from "react-router-dom";


const Seguindo = () => {
    const drawerWidth = 240;
    const auth = useAuth();
    const url = `https://api.github.com/users/${auth.user}/following`;
    const [seguidores, setSeguidores] = useState([]);
    const navigate = useNavigate();

    useEffect(
        () => {
            buscaDadosGithub(url, setSeguidores)
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
                Seguindo
            </Typography>
            <List dense={false}>
                {
                    seguidores.map((seguidor) => (

                        <ListItem
                            divider={true}
                            key={seguidor.login}
                        >
                            <ListItemButton
                                component="button"
                                onClick={
                                    () => {
                                        buscaUsuario(seguidor.login, auth.setUser, auth.setAvatar )
                                        navigate("/privado", { replace: true });
                                    }
                                }>
                                <ListItemAvatar>
                                    <Avatar
                                        alt={seguidor.login}
                                        src={seguidor.avatar_url}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={seguidor.login}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Box>

    );
}

export default Seguindo;