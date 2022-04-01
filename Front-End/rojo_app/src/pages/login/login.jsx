import { Component } from "react";
import { axios } from 'axios';
import { parseJwt } from "../../services/auth";

import Logo from '../../assets/img/logoRojo.png'

import '../../assets/css/login.css'

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email : '',
            senha : '',
            token : '',
            erroMessage : '',
            isLoading : false
        }
    }

    efetuarLogin = (event) => {

        event.preventDefault();  

        this.setState({erroMessage : '', isLoading : true})

        axios.post('http://localhost:5000/api/Login', {
            email : this.state.email,
            senha : this.state.senha
        })
        .then(response => {
            if(response.status === 200){

                localStorage.setItem('usuario-login', response.data.token)

                console.log('Meu token é: ' + response.data.token)

                this.setState({ isLoading : false });

                let base64 = localStorage.getItem('usuario-login').split('.')[1]; 

                JSON.parse(window.atob(base64))

                parseJwt().role;

                

                if(parseJwt().Role === '1') {
                    this.props.history.push('/equipamento')
                }
                else{
                    this.props.history.goBack('/');
                }
            }
        })

        .catch(() =>{
            this.setState({ erroMessage : 'E-mail ou senha incorretos', isLoading : false})
        })
    }

    efetuarLogout = (campo) => {
        
    }

    atualizaStateCampo = (campo) => {
        this.setState({ [campo.target.name] : campo.target.value })
    }


    render(){
        return(
            <div>
                <section className="bg-login">
                    <div className="container-login">
                        <nav>
                            < a className="box-logo" img src={Logo} alt="Logo Rojo"/>
                        </nav>
                        <nav>
                         {/*<Link to={}> Login</buttonLink>
                            <button Link to={}> Cadastrar</button>*/}
                        </nav>
                        <form onSubmit={this.efetuarLogin}>
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
                                placeholder="Senha"
                            />

                            <p style={{ color : 'red'}}>{this.setState.erroMessage}</p>


                            <a style={{ color : 'black', fontSize : 14}} href="/Recuperar-senha">Esqueceu a senha</a>

                            {
                                this.state.isLoading === true &&
                                <button
                                className="botao-login"
                                type="submit"
                                disable> Loading... </button> 
                            }

                            {
                                this.state.isLoading === false &&
                                <button
                                    className="botao-login"
                                    type="submit"
                                    dissable={ this.state.email === '' || this.state.senha === '' ? 'none': ''}>
                                    
                                    Login
                                </button>
                            }
                            

                        </form>
                    </div>
                </section>
            </div>
        )
    }

}
