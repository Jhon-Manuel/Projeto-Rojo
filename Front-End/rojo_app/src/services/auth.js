import axios from "axios";

export const UsuarioAutenticado = () => localStorage.getItem('usuario-login') !== null;

export const parseJwt = () => {
    let base64 = localStorage.getItem('usuario-login').split('.')[1];

    return JSON.parse( window.atob(base64) );
}

export function buscarUsuarioPorId()
    {        
        axios
        .get('http://localhost:5000/api/Usuario/', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem("usuario-login")
            }
        })

        .then((resposta) =>
            {
                localStorage.setItem("info",resposta.data);
                console.log(localStorage.gsItem("info"));
            }
        )
        .catch(erro => console.log(erro))

    }