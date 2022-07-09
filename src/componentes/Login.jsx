
import React from "react";
import { TextField, Button } from "@mui/material";
import {
    useNavigate,
    useLocation
} from "react-router-dom";
import {useAuth} from './Autenticacao';

const Login = () => {

    let navigate = useNavigate();
    let location = useLocation();
    let auth = useAuth();

    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
        auth.signin(() => {
            navigate("../privado", {replace: true});
        });
    };
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
                
                <Button variant="contained" onClick={login}>Entrar</Button>
            </div>
        </main>
    );
}

export default Login;