import { Tabs, Tab } from '@mui/material';
import * as React from 'react';
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../assets/css/componentes/cabecalho.css';



const Cabecalho = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <header className='cabecalho flex flex--centro'>
            <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
                <Tab icon={<HomeIcon />} label="HOME" />
                <Tab icon={<GitHubIcon />} label="REPOS" />
                <Tab icon={<GroupIcon />} label="Seguidores" />
                <Tab icon={<GroupIcon />} label="Seguindo" />
            </Tabs>
        </header>

    );
}

export default Cabecalho;