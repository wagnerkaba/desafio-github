
import React, { useEffect, useState } from "react";
import {
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
import { buscaDadosGithub } from "../servicos/apiGitHub";
import GitHubIcon from '@mui/icons-material/GitHub';



const Repositorios = () => {
    const drawerWidth = 240;
    const auth = useAuth();
    const url = `https://api.github.com/users/${auth.user}/repos`;
    const [repositorios, setRepositorios] = useState([]);

    useEffect(
        () => {
            buscaDadosGithub(url, setRepositorios)
        },
        [url]
    );

    console.log(repositorios);


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
                Repositórios
            </Typography>
            <List dense={false}>
                {
                    repositorios.map((repositorio) => (

                        <ListItem
                            divider={true}
                            key={repositorio.name}
                        >
                            <ListItemButton
                                component="button"
                                href={repositorio.html_url}
                                target={"_blank"}
                                rel={"noreferrer"}
                                >

                                <ListItemAvatar>
                                    <GitHubIcon />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={repositorio.name}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Box>

    );
}

export default Repositorios;