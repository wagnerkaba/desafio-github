import axios from 'axios';

export const buscaDadosGithub = async (url, setDado) => {
    const resposta = await axios.get(url);
    setDado(resposta.data);
}