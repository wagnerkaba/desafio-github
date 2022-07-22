
import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import {
    useNavigate
} from "react-router-dom";
import { useAuth } from '../context/Autenticacao';
import axios from "axios";


const Login = () => {

    const [usuario, setUsuario] = useState(null);
    const [erro, setErro] = useState({valido:true, texto: ""});
    let navigate = useNavigate();
    let auth = useAuth();

    async function login() {

        try {
            const userGitHub = await axios.get(`https://api.github.com/users/${usuario}`);
            console.log(userGitHub);
            auth.setUser(userGitHub.data.login);
            auth.setAvatar(userGitHub.data.avatar_url);
            console.log(auth.avatar);
            navigate("../privado", { replace: true });
        }
        catch (erro) {
            setErro({valido:false, texto: "Verifique se o nome de usuário está correto"});

        }

    }

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
                    error={!erro.valido} //mostra caixa de texto em vermelho para indicar erro
                    helperText={erro.texto} // mostra texto de erro para
                />

                <Button type="submit" variant="contained">Entrar</Button>
            </form>
        </main>
    );
}

export default Login;