import * as React from 'react';
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';
import LogoutIcon from '@mui/icons-material/Logout';
import {
    Drawer as MUIDrawer,
    ListItem,
    List,
    ListItemIcon,
    ListItemText
} from "@mui/material";
import { useNavigate } from 'react-router-dom';





const Drawer = props => {
    const navigate = useNavigate();
    const itemsList = [
        {
            text: "Home",
            icon: <HomeIcon />,
            onClick: () => navigate("../privado/", {replace: true})
        },
        {
            text: "Repositórios",
            icon: <GitHubIcon />,
            onClick: () => navigate("../privado/repos", {replace: true})
        },
        {
            text: "Seguindo",
            icon: <GroupIcon />,
            onClick: () => navigate("seguindo", {replace: true})
        },
        {
            text: "Seguidores",
            icon: <GroupIcon />,
            onClick: () => navigate("seguidores", {replace: true})
        },
        {
            text: "Sair",
            icon: <LogoutIcon />,
            onClick: () => navigate("sair", {replace: true})
        }
    ];
    return (
        <MUIDrawer variant="permanent">
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

        </MUIDrawer>
    );
};



// const Drawer = () => {
//     const [value, setValue] = React.useState(0);

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };

//     return (
//         <header className='cabecalho flex flex--centro'>
//             <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
//                 <Tab icon={<HomeIcon />} label="HOME" />
//                 <Tab icon={<GitHubIcon />} label="REPOS" />
//                 <Tab icon={<GroupIcon />} label="Seguidores" />
//                 <Tab icon={<GroupIcon />} label="Seguindo" />
//             </Tabs>
//         </header>

//     );
// }

export default Drawer;