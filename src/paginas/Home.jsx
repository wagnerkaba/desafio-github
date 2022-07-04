
import React from "react";
import { TextField, Button } from "@mui/material";

const Home = () => {
    return (
        <main>
            <div className="container">
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <Button variant="contained">Entrar</Button>
            </div>
        </main>
    );
}

export default Home;