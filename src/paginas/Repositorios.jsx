
import React from "react";
import {

    Box,
    Toolbar
} from "@mui/material";



const Repositorios = () => {
    const drawerWidth = 240;
    return (

        <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
            <Toolbar />
            <h1>
                Repositorios
            </h1>


        </Box>

    );
}

export default Repositorios;