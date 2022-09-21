import axios from 'axios';

// Observação:
// Em vez de colocar hooks (por exemplo: setUser, setAvatar) como parâmetros, porque não importo diretamente aqui? Se importar diretamente aqui, dá erro por violar Rules of Hooks

export const buscaDadosGithub = async (url, setDado, isPeople) => {
    let resposta;
    const itens = await axios.get(url);
    //se o dado buscado é pessoa (seguidor), então o dado precisa ser formatado
    if(isPeople){
        resposta = itens.data.map((item)=>{
            item.name = item.login;            
            return item;
        });
        setDado(resposta);
        return;
    }
    setDado(itens.data);
}


export const mudaUsuario = async (usuario, setUser, setAvatar, navigate) => {
    const userGitHub = await axios.get(`https://api.github.com/users/${usuario}`);
    localStorage.setItem("userGitHub", JSON.stringify(userGitHub.data));
    setUser(userGitHub.data.login);
    setAvatar(userGitHub.data.avatar_url);
    navigate("/privado");
}

