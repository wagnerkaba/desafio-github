import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import {
  Drawer as MUIDrawer,
  Avatar,
  Snackbar
} from "@mui/material";

import DrawerItens from './DrawerItens';
import { useAuth } from '../../context/Autenticacao';

const drawerWidth = parseInt(process.env.REACT_APP_DRAWER_WIDTH);//variavel de ambiente salva no arquivo .env


const DrawerResponsivo = (props) => {
  const auth = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [sobre, setSobre] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const abrirSobre = () => setSobre(true);
  const fecharSobre = () => setSobre(false);

  const actionSobre = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={fecharSobre}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );


  const container = window !== undefined ? () => window().document.body : undefined;

  return (

    <>


      {/*==================================== APP BAR ====================================*/}

      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" >

            {auth.user}

          </Typography>
          <IconButton onClick={abrirSobre}>
            <Avatar
              alt={auth.user}
              src={auth.avatar}
            />
          </IconButton>
          <Snackbar
            open={sobre}
            autoHideDuration={6000}
            onClose={fecharSobre}
            message="Implementado por WAGNER KABA"
            action={actionSobre}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          />

        </Toolbar>
      </AppBar>


      {/*==================================== DRAWER ====================================*/}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/*==================================== TEMPORARY DRAWER ====================================*/}
        <MUIDrawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <DrawerItens setMobileOpen={setMobileOpen} />
        </MUIDrawer>

        {/*==================================== PERMANENT Drawer ====================================*/}
        <MUIDrawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          <DrawerItens setMobileOpen={setMobileOpen} />

        </MUIDrawer>
      </Box>

    </>


  );
}

export default DrawerResponsivo;