import axios from 'axios';



export const buscaDadosGithub = async (url, setDado) => {
    const resposta = await axios.get(url);
    setDado(resposta.data);
}

export const buscaUsuario = async (usuario, setUser, setAvatar) => {

    const userGitHub = await axios.get(`https://api.github.com/users/${usuario}`);
    localStorage.setItem("userGitHub", JSON.stringify(userGitHub.data));
    setUser(userGitHub.data.login);
    setAvatar(userGitHub.data.avatar_url);

}