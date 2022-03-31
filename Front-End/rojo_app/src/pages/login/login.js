import { Component, Consumer } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email : '',
            senha : '',
        }
    }

    efetuarLogin = (event) => {
        event.preventDefault();
    }

    atualizaStateCampo = (event) => {
        
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
                            placeholder="Email"
                        /> 
                        <input
                            type="senha"
                            name="senha"
                            value={this.state.senha}
                            onChange={this.atualizaStateCampo}
                            placeholder="Senha"
                        />
                        <button type="submit">Logar</button>

                    </form>
                </section>
            </div>
        )
    }

}