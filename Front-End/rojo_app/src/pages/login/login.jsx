import axios from 'axios';
import { parseJwt } from "../../services/auth";
import { Link, useNavigate } from "react-router-dom";

import Logo from '../../assets/img/logoRojo.png';

import '../../assets/css/login.css';
import { useState } from 'react';


export default function Login (){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isLoading,setIsLoading] = useState(false);
    const [erroMensagem,setErroMensagem] = useState('');

    var navigate = useNavigate(); 

    function FazerLogin (event) {

        event.preventDefault();  

        setErroMensagem(null);

        isLoading(true);

        axios
            .post('http://localhost:5000/api/Login', {
                email : email,
                senha : senha,
            })

            .then((response) => {

                if(response.status === 200){

                    localStorage.setItem('usuario-login', response.data.token)

                    //console.log('Meu token é: ' + response.data.token)

                    setIsLoading(false);

                    //let base64 = localStorage.getItem('usuario-login').split('.')[1]; 

                    //JSON.parse(window.atob(base64))

                    if(parseJwt().Role === '1') {
                        navigate('/Equipamento')
                    }
                    else if(parseJwt().Role === '2'){
                        navigate('/Equipamento')
                    }
                    else{
                        navigate('/Login');
                    }
                    
                }
            }
        )

        .catch(erro => {
                erro = ('Email ou senha incorretos')
                setErroMensagem (erro)
                setIsLoading(false)
          })
    }

    function atualizaStateCampo (campo){
        campo.target.name = campo.target.value 
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
                <div className="box-login">
                        <div className="box-login-nav">
                            <nav>
                                <Link to="/Login">LOGIN</Link>
                                <Link to="/CadastrarUsuario"> CADASTRAR</Link>
                            </nav>
                        </div>

                        <div className="box-form-login">

                            <form  className="form-login" onSubmit={FazerLogin}>
                                <div className="box-input-login">
                                    <p>Email</p>

                                    <input
                                        className="input-login"
                                        type="email"
                                        name="setEmail"
                                        value={this.state.email}
                                        onChange={this.atualizaStateCampo}
                                        placeholder="example@email.com"
                                    /> 
                                </div>
                                <div className="box-input-login">
                                    <p>Senha</p>
                                    <input
                                        className="input-login"
                                        type="password"
                                        name="setSenha"
                                        value={this.state.senha}
                                        onChange={this.atualizaStateCampo}
                                        placeholder="* * * * *"
                                    />
                                </div>

                                <p style={{ color : 'red'}}> {this.state.erroMensagem} </p>

                                <p className="login-recuperar" style={{ color : 'white', fontSize : 12,}} href="/Recuperar-senha">Esqueceu a senha</p>
                          

                                    {
                                        this.state.isLoading === true && (
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
                                        this.state.isLoading === false && (
                                            <button
                                            className="btn-login"
                                            id="btn__login"
                                            type="submit"
                                            disabled={
                                                this.state.email === '' || this.state.senha === ''
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



