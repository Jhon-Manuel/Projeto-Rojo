import { Component } from "react";
import axios from 'axios';
import { parseJwt, usuarioAutenticado } from "../../services/auth";
import { Link } from "react-router-dom";

import Logo from '../../assets/img/logoRojo.png';

import '../../assets/css/login.css';

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email : '',
            senha : '',
            token : '',
            erroMensagem : '',
            isLoading : false,
            situacao : false,
        }
    }

    efetuarCadastro = (event) => {
        event.preventDefault();

        axios
        .post('http://localhost:5000/api/Usuario', {
            
        })
    }


    atualizaStateCampo = (campo) => {
        this.setState({ [campo.target.name] : campo.target.value })
    };
        
    
    render(){
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

                            <form  className="form-login-2" onSubmit={this.efetuarLogin}>
                                <div className="cont-login">

                                    <div className="box-cadastro-1">
                                        <div className="box-input-login">
                                            <p>Email</p>

                                            <input
                                                className="input-login"
                                                type="email"
                                                name="email"
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
                                                name="senha"
                                                value={this.state.senha}
                                                onChange={this.atualizaStateCampo}
                                                placeholder="* * * * *"
                                            />
                                        </div>
                                    </div>

                                    <div className="box-cadastro-2">

                                        <div className="box-input-login">
                                            <p>Email</p>

                                            <input
                                                className="input-login"
                                                type="email"
                                                name="email"
                                                value={this.state.email}
                                                onChange={this.atualizaStateCampo}
                                                placeholder="example@email.com"
                                            /> 
                                        </div>
                                    </div>
                                    <div className="box-input-login">
                                        <p>Senha</p>
                                        <input
                                            className="input-login"
                                            type="password"
                                            name="senha"
                                            value={this.state.senha}
                                            onChange={this.atualizaStateCampo}
                                            placeholder="* * * * *"
                                        />
                                    </div>
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
}

