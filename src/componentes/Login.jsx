
import React from "react";
import { TextField, Button } from "@mui/material";

const Login = () => {
    return (
        <main>
            <div className="container flex flex--coluna">
                <TextField
                    id="outlined-basic"
                    label="Username do github"
                    variant="outlined"
                    margin= "normal"
                    fullwidth
                    required
                />
                
                <Button variant="contained">Entrar</Button>
            </div>
        </main>
    );
}

export default Login;