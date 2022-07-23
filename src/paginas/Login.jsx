
import React, { useState } from "react";
import {
    TextField,
    Button,
    Box,
    Slide
} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import {
    useNavigate
} from "react-router-dom";
import { useAuth } from '../context/Autenticacao';
import axios from "axios";


const Login = () => {

    const [usuario, setUsuario] = useState(null);
    const [erro, setErro] = useState({ valido: true, texto: "" });
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
            setErro({ valido: false, texto: "Verifique se o nome de usuário está correto" });

        }

    }

    return (

        <Box
            component="form"
            onSubmit={(event) => {
                event.preventDefault();
                login();
            }}
            sx={{
                p: 3,
                maxWidth: 'sm',
                height: "100vh",
                display: "flex",
                flexDirection: 'column',
                justifyContent: 'center',
                mx: "auto",
            }}
        >
            <Slide direction="down" in={true}>
                <GitHubIcon
                    sx={{
                        fontSize: 150,
                        mx: "auto",
                        color: "gray"
                    }}

                />

            </Slide>

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

            <Button type="submit" variant="contained">
                Entrar
            </Button>

        </Box >
    );
}

export default Login;