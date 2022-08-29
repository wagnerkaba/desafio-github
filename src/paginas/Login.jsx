
import React, { useState } from "react";
import {
    TextField,
    Button,
    Box,
    Slide,
    Tooltip
} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import {
    useNavigate
} from "react-router-dom";
import { useAuth } from '../context/Autenticacao';
import axios from "axios";


const Login = () => {

    const [inputUsuario, setInputUsuario] = useState(null);
    const [erro, setErro] = useState({ valido: true, texto: "" });
    let navigate = useNavigate();
    let auth = useAuth();



    async function login() {

        try {
            const userGitHub = await axios.get(`https://api.github.com/users/${inputUsuario}`);
            localStorage.setItem("userGitHub", JSON.stringify(userGitHub.data));
            auth.setUser(userGitHub.data.login);
            auth.setAvatar(userGitHub.data.avatar_url);
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
                        mx: "auto", // Para entender mx, vide mui spacing (https://mui.com/system/spacing/)
                        color: "info.main" // Para entender cores, vide Palette: https://mui.com/system/palette/
                    }}

                />

            </Slide>
            <Tooltip title='Digite um usuário do github para começar.' placement="top-start">
                <TextField
                    onChange={(event) => { setInputUsuario(event.target.value) }}
                    id="outlined-basic"
                    label="Username do github"
                    variant="outlined"
                    margin="normal"
                    fullwidth="true"
                    required
                    error={!erro.valido} //mostra caixa de texto em vermelho para indicar erro
                    helperText={erro.texto} // mostra texto de erro para
                />
            </Tooltip>


            <Button type="submit" variant="contained">
                Entrar
            </Button>

        </Box >
    );
}

export default Login;