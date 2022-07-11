
import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import {
    useNavigate
} from "react-router-dom";
import { useAuth } from '../context/Autenticacao';

const Login = () => {

    const [usuario, setUsuario] = useState(null);
    let navigate = useNavigate();
    let auth = useAuth();

    let login = () => {

        auth.signin(usuario);

        // navigate("../privado", { replace: true });
    };
    return (
        <main>
            <form
                className="container flex flex--coluna"
                onSubmit={(event) => {
                    event.preventDefault();
                    login();
                }}
            >
                <TextField
                    onChange={(event) => { setUsuario(event.target.value) }}
                    id="outlined-basic"
                    label="Username do github"
                    variant="outlined"
                    margin="normal"
                    fullwidth="true"
                    required
                />

                <Button type="submit" variant="contained">Entrar</Button>
            </form>
        </main>
    );
}

export default Login;