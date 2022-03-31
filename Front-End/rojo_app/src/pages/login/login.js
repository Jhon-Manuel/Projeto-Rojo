import { Component } from "react";
import { axios } from 'axios';
import { Link } from "react-router-dom";
import { red } from "jest-matcher-utils/node_modules/chalk";

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

        this.setState({erroMessage =''})

        axios.post('http://localhost:5000/api/Login', {
            email : this.state.email,
            senha : this.state.senha
        })
        .then(response => {
            if(response.status === 200){

                localStorage.setItem('usuario-login', response.data.token)

                console.log('Meu token é: ' + response.data.token)

                this.setState({ isLoading : false })
            }
        })

        .catch(() =>{
            this.setState({ erroMessage : 'E-mail ou senha incorretos', isLoading : false})
        })
    }

    atualizaStateCampo = (campo) => {
        this.setState({ [campo.target.name] : campo.target.value })
    }


    render(){
        return(
            <div>
                <section className="bg-login">
                    <nav>
                        <button Link to={}> Login</button>
                        <button Link to={}> Cadastrar</button>
                    </nav>
                    <form onSubmit={this.efetuarLogin}>
                        <input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.atualizaStateCampo}
                            onKeyUp={}
                            placeholder="Email"
                        /> 
                        <input
                            type="senha"
                            name="senha"
                            value={this.state.senha}
                            onChange={this.atualizaStateCampo}
                            placeholder="Senha"
                        />

                        <p style={{ color : 'red'}}>{this.setState.erroMessage}</p>
                        {
                            this.state.isLoading === true &&
                            <button type="submit" disable> Loading... </button> 
                            
                        }

                        {
                            this.state.isLoading === false &&
                            <button
                                type="submit"
                                dissable={ this.state.email === '' || this.state.senha === '' ? 'none': ''}>
                                Login
                            </button>
                        }
                        

                    </form>
                </section>
            </div>
        )
    }

}