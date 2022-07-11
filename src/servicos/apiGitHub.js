import axios from "axios";

async function buscarUsuario(usuario){
    const userGitHub = await axios
        .get(`https://api.github.com/users/${usuario}`)
        .then(response=>{    
            console.log(response.data.login);
        })
}





export { buscarUsuario };