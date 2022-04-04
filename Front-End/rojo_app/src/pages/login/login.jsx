import { Component } from "react";
import axios from 'axios';
import { parseJwt } from "../../services/auth";
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
            <div>
                <header>
                    <div>
                        <nav>
                            <Link to="/home" />
                        </nav>
                    </div>    
                </header>
                <section className="bg-login">

                    <div className="container-login">
                        <div>
                            <nav>
                                <Link to="/Login">Login</Link>
                                <Link to="/Cadastrar"> Cadastrar</Link>
                            </nav>
                        </div>

                        <div>

                            <form onSubmit={this.efe}>
                                <input
                                    className="input-login"
                                    type="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.atualizaStateCampo}
                                    placeholder="Email"
                                /> 
                                <input
                                    className="input-login"
                                    type="password"
                                    name="senha"
                                    value={this.state.senha}
                                    onChange={this.atualizaStateCampo}
                                    placeholder="Password"
                                />
                                <div>

                                    <p style={{ color : 'red'}}> {this.state.erroMensagem} </p>


                                    <a style={{ color : 'blue', fontSize : 14}} href="/Recuperar-senha">Esqueceu a senha</a>

                                    {
                                        this.state.isLoading === true && (
                                            <button
                                            type="submit"
                                            disabled
                                            className="btn btn__login"
                                            id="btn__login"
                                            >
                                            Loading...
                                            </button>
                                        )
                                    }

                                    {
                                        this.state.isLoading === false && (
                                            <button
                                            className="btn btn__login"
                                            id="btn__login"
                                            type="submit"
                                            disabled={
                                                this.state.email === '' || this.state.senha === ''
                                                ? 'none'
                                                : ''
                                            }
                                            >
                                            Login
                                            </button>
                                        )
                                    }
                                </div>


                            </form>
                        </div>
                       
                    </div>
                </section>
            </div>
        )

    }
}

