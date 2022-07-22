
import React from "react";
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


const Repositorios = () => {
    const drawerWidth = 240;
    const auth = useAuth();
    return (

        <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
            <Toolbar />
            <h1>
                Repositorios
            </h1>
            <List dense={false}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar
                            alt={auth.user}
                            src={auth.avatar}
                            sx={{ width: 100, height: 100 }}
                        />
                    </ListItemAvatar>
                    <ListItemText
                        primary={auth.user}
                    />
                </ListItem>

            </List>
        </Box>

    );
}

export default Repositorios;