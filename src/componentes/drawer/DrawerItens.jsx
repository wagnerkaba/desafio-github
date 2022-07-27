import * as React from 'react';
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';
import LogoutIcon from '@mui/icons-material/Logout';
import {
    ListItem,
    List,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Divider
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/Autenticacao';


const DrawerItens = (props) => {
    const auth = useAuth();
    const navigate = useNavigate();
    const itemsList = [
        {
            text: "Home",
            icon: <HomeIcon />,
            onClick: () => {
                props.setMobileOpen(false);
                navigate("../privado/", { replace: true })
            }
        },
        {
            text: "Repositórios",
            icon: <GitHubIcon />,
            onClick: () => {
                props.setMobileOpen(false);
                navigate("repos", { replace: true });
            }
        },
        {
            text: "Seguindo",
            icon: <GroupIcon />,
            onClick: () => {
                props.setMobileOpen(false);
                navigate("seguindo", { replace: true });
            }
        },
        {
            text: "Seguidores",
            icon: <GroupIcon />,
            onClick: () => {
                props.setMobileOpen(false);
                navigate("seguidores", { replace: true });
            }
        },
        {
            text: "Sair",
            icon: <LogoutIcon />,
            onClick: () => {
                auth.setUser(null);
                navigate("/", { replace: true });
            }
        }
    ];


    return (
        <>
            <Toolbar />
            <Divider />
            <List>
                {itemsList.map((item, index) => {
                    const { text, icon, onClick } = item;
                    return (

                        <ListItem button key={text} onClick={onClick}>
                            {icon && <ListItemIcon>{icon}</ListItemIcon>}
                            <ListItemText primary={text} />
                        </ListItem>
                    );
                })}
            </List>
        </>

    );
};


export default DrawerItens;