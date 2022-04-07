import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link,useNavigate } from "react-router-dom";

import Logo from '../../assets/img/logoRojo.png';

import '../../assets/css/login.css';

export default function CadastroUsuario() {
    

    //States Usuario
    const [nome, setNome] = useState('');
    const [emailUsuario, setEmailUsuario] = useState('');
    const [senhasuario, setSenhaUsuario] = useState('');
    const [contato, setContato] = useState('');
    const [cargo, setCargo] = useState('');
    const [razaoSocial, setRazaoSocial] = useState('');
    const [tipoUsuario, setTipoUsuario] = useState(1);
    const [loading, setLoading] = useState(false);

    //Listas
    const [listaTipoEquipamento, setListaTipoEquipamento] = useState([]);

    var navigate = useNavigate()

    function buscarTipoEquipamento ()
    {
        axios
        .get('http://localhost:5000/api/TipoEquipamento')

        .then((response) => {
            setListaTipoEquipamento(response.data)
        })
    }

    const FazerCadastroUsuario = (event) => {

        event.preventDefault();

        setLoading(true)

        let usuario = {
            tipoUsuario : tipoUsuario,
            nome: nome,
            email: emailUsuario,
            senha: senhasuario,
            contato : contato,
            cargo : cargo,
            razaoSocial : razaoSocial,
         
        }

        axios
        .post("http://localhost:5000/api/Usuario/cadastro-usuario", usuario, {})

        .then((response) => {

            if (response.status === 201) {
                setLoading(false)
                console.log('Usuario Cadastrado !')
                navigate('/BemVindo')
            }

        })
        .catch(erro => console.log(erro))
    }

    useEffect(console.log(buscarTipoEquipamento, []))

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

                            <form  className="form-login-2" onSubmit={FazerCadastroUsuario}>
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
                                                value={emailUsuario}
                                                onChange={event => setEmailUsuario(event.target.value)}
                                                placeholder="example@email.com"
                                            /> 
                                        </div>
                                        <div className="box-input-login-2">
                                            <p>Senha</p>
                                            <input
                                                className="input-login"
                                                type="password"
                                                value={senhasuario}
                                                onChange={event => setSenhaUsuario(event.target.value)}
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
                                                emailUsuario === '' || senhasuario === ''
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


