
import { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

class Cadastrar extends Component {
    constructor(props){
        super(props);
        this.state = {
            nome  : '',
            email :  '',
            senha : '',
            contato  : '',
            cargo : '',
            razaoSocial : '',
            confirmarSenha : '',
            erroMensagem : '',
            isLoading : false,
        };
    }

    efetuarCadastro = (formulario) => {

        formulario.preventDefault();

        this.setState({ isLoading : true });
        
        if(this.state.confirmarSenha === this.state.senha)
        {
            axios
            .post('http://localhost:5000/api/Usuario', {
                nome : this.state.nome,
                razaoSocial : this.state.razaoSocial,
                cargo : this.state.cargo,
                contato : this.state.contato,
                email : this.state.email,
                senha : this.state.senha,
                
            })
            .catch(() => {
                this.setState({
                    erroMensagem : 'campo vazio',
                });
            })

        }  else{
            this.setState({
            [this.state.erroMensagem] : 'senha invalida'
        })}

        
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

                    <div className="container-cadastro">
                        <div>
                            <nav>
                                <Link to="/Login">Login</Link>
                                <Link to="/Cadatrar"> Cadastrar</Link>
                            </nav>
                        </div>

                        <div>

                            <form onSubmit={this.efetuarCadastro}>
                                <input
                                    className="input-login"
                                    type="text"
                                    name="nome"
                                    value={this.state.nome}
                                    onChange={this.atualizaStateCampo}
                                    placeholder="Nome"
                                /> 
                                <input
                                        className="input-login"
                                        type="text"
                                        name="razaoSocial"
                                        value={this.state.razaoSocial}
                                        onChange={this.atualizaStateCampo}
                                        placeholder="Empresa"
                                />
                                <input
                                    className="input-login"
                                    type="text"
                                    name="cargo"
                                    value={this.state.cargo}
                                    onChange={this.atualizaStateCampo}
                                    placeholder="Cargo Profissional"
                                />
                                <input
                                    className="input-login"
                                    type="text"
                                    name="contato"
                                    value={this.state.contato}
                                    onChange={this.atualizaStateCampo}
                                    placeholder="Telefone"
                                />
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
                                <input
                                    className="input-login"
                                    type="password"
                                    name="confirmarSenha"
                                    value={this.state.confirmarSenha}
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
export default Cadastrar;