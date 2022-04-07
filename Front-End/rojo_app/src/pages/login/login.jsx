import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

import { buscarUsuarioPorId } from '../../services/auth';

import Logo from '../../assets/img/logoRojo.png';

import '../../assets/css/login.css';


export default function Login() {
    const [emailUsuario, setEmailUsuario] = useState('');
    const [senhaUsuario, setSenhaUsuario] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [erroMensagem, setErroMensagem] = useState('');

    var navigate = useNavigate();

    function buscarUsuarioPorId()
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
                console.log(localStorage.getItem("info"));
            }
        )
        .catch(erro => console.log(erro))

    }

    function FazerLogin(event) {    
        event.preventDefault();

        setErroMensagem(null);

        setIsLoading(true);

        axios
            .post('http://localhost:5000/api/Login', {
                email: emailUsuario,
                senha: senhaUsuario,
            })
            
            .then((response) =>
            {

                if (response.status === 200)
                {
                    localStorage.setItem('usuario-login', response.data.token)

                    setIsLoading(false)

                    navigate('/BemVindo')
                    console.log(`login realizado`)                       
                }
                    else {
                        navigate('/Login');
                        isLoading(false)
                    
                }
                })
        
              
            .then((response) => 
            {
                if (response.status === 200) {
                    
                    navigate('/BemVindo')
                }
                else{
                    navigate('/Login');
                    isLoading(false)
                }
            })
            .catch(erro => {
                erro = (' Email ou senha incorretos')
                setErroMensagem(erro)
                setIsLoading(false)
            })
    }


    return (

        <div className="container-login">
            <header>
                <div className="logo-header-login">
                    <nav>
                        <Link to="/"><img src={Logo} /></Link>
                    </nav>
                </div>
            </header>
            <div className="bg-animation-login" />
            <div className="box-login">
                <div className="box-login-nav">
                    <nav>
                        <Link to="/Login">LOGIN</Link>
                        <Link to="/CadastrarUsuario"> CADASTRAR</Link>
                    </nav>
                </div>

                <div className="box-form-login">

                    <form className="form-login" onSubmit={(event) => FazerLogin(event)}>
                        <div className="box-input-login">
                            <p>Email</p>

                            <input
                                className="input-login"
                                type="email"
                                value={emailUsuario}
                                onChange={(event) => setEmailUsuario(event.target.value)}
                                placeholder="example@email.com"
                            />
                        </div>
                        <div className="box-input-login">
                            <p>Senha</p>
                            <input
                                className="input-login"
                                type="password"
                                value={senhaUsuario}
                                onChange={(event) => setSenhaUsuario(event.target.value)}
                                placeholder="* * * * *"
                            />
                        </div>

                        <p style={{ color: 'red' }}> {erroMensagem} </p>

                        <p className="login-recuperar" style={{ color: 'white', fontSize: 12, }} href="/Recuperar-senha">Esqueceu a senha</p>


                        {
                            isLoading === true && (
                                <button
                                    type="submit"
                                    disabled
                                    className="btn-login"
                                    id="btn__login"
                                >
                                    Loading...
                                </button>
                            )
                        }

                        {
                            isLoading === false && (
                                <button
                                    className="btn-login"
                                    id="btn__login"
                                    type="submit"
                                    disabled={
                                        emailUsuario === '' || senhaUsuario === ''
                                            ? 'none'
                                            : ''
                                    }
                                >
                                    LOGIN
                                </button>
                            )
                        }



                    </form>
                </div>

            </div>
        </div>
    )

}



