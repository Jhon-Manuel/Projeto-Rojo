import { Component } from "react";
import axios from 'axios';
import { parseJwt, usuarioAutenticado } from "../../services/auth";
import { Link } from "react-router-dom";

import Logo from '../../assets/img/logoRojo.png'

import '../../assets/css/login.css'

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

    efetuarLogin = (event) => {

        event.preventDefault();  

        this.setState({ erroMensagem : null, isLoading : true});

        axios
            .post('http://localhost:5000/api/Login', {
                email : this.state.email,
                senha : this.state.senha
            })

            .then(response => {

                if(response.status === 200){

                    localStorage.setItem('usuario-login', response.data.token)

                    //console.log('Meu token é: ' + response.data.token)

                    this.setState({ isLoading : false });

                    //let base64 = localStorage.getItem('usuario-login').split('.')[1]; 

                    //JSON.parse(window.atob(base64))

                    if(parseJwt().Role === '1') {
                        this.props.history.push('/Equipamento')
                    }
                    else{
                        this.props.history.goBack('/Login');
                    }
                }
        })

        .catch(() => {
            this.setState({
                erroMensagem : 'E-mail ou senha incorretos',
                isLoading : false,
            });
        });
    }

    atualizaStateCampo = (campo) => {
        this.setState({ [campo.target.name] : campo.target.value })
    }
        
    
    render(){
        return(
            <div className="container-login">
                {/* <header>
                    <div>
                        <nav>
                            <Link to="/home" />
                        </nav>
                    </div>    
                </header>
                 */}
                <div className="bg-animation-login"/>
                <div className="box-login">
                        <div className="box-login-nav">
                            <nav>
                                <Link to="/Login">Login</Link>
                                <Link to="/Cadastrar"> Cadastrar</Link>
                            </nav>
                        </div>

                        <div className="box-form-login">

                            <form  className="form-login" onSubmit={this.efetuarLogin}>
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


