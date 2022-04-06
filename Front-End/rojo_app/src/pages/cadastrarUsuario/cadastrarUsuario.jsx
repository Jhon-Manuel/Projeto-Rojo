import axios from 'axios';
import { parseJwt, usuarioAutenticado } from "../../services/auth";
import { Link } from "react-router-dom";

import Logo from '../../assets/img/logoRojo.png';

import '../../assets/css/login.css';
import { useState } from 'react';

export default function CadastroUsuario(){
    
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [contato, setContato] = useState('');
    const [cargo, setCargo] = useState('');
    const [razaoSocial, setRazaoSocial] = useState('');
    const [tipoUsuario, setTipoUsuario] = useState(1);
    const [loading, setLoading] = useState(false);

    function FazerCadastroUsuario(event) {

        event.preventDefault();

        setLoading(true)

        // let usuario = new Object({
        //     "tipoUsuario" : tipoUsuario,
        //     "nome": nome,
        //     "email": email,
        //     "senha": senha,
        //     "contato" : contato,
        //     "cargo" : cargo,
        //     "razaoSocial" : razaoSocial,
         
        // })

        axios.post('https://localhost:5000/api/Usuario', {
            "tipoUsuario" : tipoUsuario,
            "nome": nome,
            "email": email,
            "senha": senha,
            "contato" : contato,
            "cargo" : cargo,
            "razaoSocial" : razaoSocial,
        })

            .then((resposta) => {
                if (resposta.status === 201) {
                    setLoading(false)
                    console.log('usuario cadastrado !')
                }

            })

            .catch(erro => console.log(erro))
    }
        return(
            <div className="container-login">
                 <header>
                    <div className="logo-header-login">
                        <nav>
                            <Link to="/"><img src={Logo}/></Link>
                        </nav>
                    </div>    
                </header>
                <div className="bg-animation-login"/>
                <div className="box-login-2">
                        <div className="box-login-nav">
                            <nav>       
                                <Link to="/Login">LOGIN</Link>
                                <Link to="/CadastrarUsuario"> CADASTRAR</Link>
                            </nav>
                        </div>

                        <div className="box-form-login-2">

                            <form  className="form-login-2" onSubmit={(event) => FazerCadastroUsuario(event)}>
                                <div className="cont-login">

                                    <div className="box-cadastro-1">
                                        <div className="box-input-login-2">
                                            <p>Nome</p>

                                            <input
                                                className="input-login"
                                                type="text"
                                                value={nome}
                                                onChange={event => setNome(event.target.value)}
                                                placeholder="nome completo"
                                            /> 
                                        </div>
                                        <div className="box-input-login-2">
                                            <p>Cargo</p>
                                            <input
                                                className="input-login"
                                                type="text"
                                                value={cargo}
                                                onChange={event => setCargo(event.target.value)}
                                                placeholder="posicao"
                                            />
                                        </div>
                                        <div className="box-input-login-2">
                                            <p>Empresa</p>
                                            <input
                                                className="input-login"
                                                type="empresa"
                                                value={razaoSocial}
                                                onChange={event => setRazaoSocial(event.target.value)}
                                                placeholder="razao social"
                                            />
                                        </div>
                                    </div>

                                    <div className="box-cadastro-2">

                                        <div className="box-input-login-2">
                                            <p>Email</p>

                                            <input
                                                className="input-login"
                                                type="email"
                                                name="email"
                                                value={email}
                                                onChange={event => setEmail(event.target.value)}
                                                placeholder="example@email.com"
                                            /> 
                                        </div>
                                        <div className="box-input-login-2">
                                            <p>Senha</p>
                                            <input
                                                className="input-login"
                                                type="password"
                                                value={senha}
                                                onChange={event => setSenha(event.target.value)}
                                                placeholder="* * * * *"
                                            />
                                        </div>
                                        <div className="box-input-login-2">
                                            <p>Contato</p>
                                            <input
                                                className="input-login"
                                                type="text"
                                                value={contato}
                                                onChange={event => setContato(event.target.value)}
                                                placeholder="(11)00000-0000"
                                            />
                                        </div>
                                    </div>
                                </div>
                          

                                    {
                                        loading === true && (
                                            <button
                                            type="submit"
                                            disabled
                                            className="btn-login-2"
                                            id="btn__login"
                                            >
                                            Loading...
                                            </button>
                                        )
                                    }

                                    {
                                        loading === false && (
                                            <button
                                            className="btn-login-2"
                                            id="btn__login"
                                            type="submit"
                                            disabled={
                                                email === '' || senha === ''
                                                ? 'none'
                                                : ''
                                            }
                                            >
                                            CADASTRAR
                                            </button>
                                        )
                                    }
      


                            </form>
                        </div>
                       
                    </div>
            </div>
        )
                                }


