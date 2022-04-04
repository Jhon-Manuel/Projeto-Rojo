import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import '../../assets/css/barra-esquerda.css';


import Filtro from '../../assets/icon/icon-filtro.png';
import Editar from '../../assets/icon/icon-editar.png';
import Ferramenta from '../../assets/icon/icon-ferramenta.png';

import Logo from '../../assets/img/logoRojo.png';
import Sair from '../../assets/icon/icon-sair.png';
import Linq from '../../assets/icon/icon-link.png';
import Grafana from '../../assets/icon/icon-grafana.png';
import Graylog from '../../assets/icon/icon-graylog.png';
import Zabbix from '../../assets/icon/icon-zabbix.png';
import ho from '../../assets/icon/historico.png';
import la from '../../assets/icon/lista.png';
import ta from '../../assets/icon/topologia.png';
import aa from '../../assets/icon/alerta.png';

import '../../assets/css/barra-esquerda.css';
import '../../assets/css/equipamento.css';



export default class Equipamento extends Component{
    constructor(props){
        super(props)
        this.state = {
            nome : 'Taina Silva',
            cargo : 'Supervisora de Infraestrutura',
           listaEquipamento : [],
           Modelo : 'Switch',
           NumeroSerie : 0,
           Gateway: 0,
           IP : 0,
           DNS : 0,
           Porta : 0,
           img64 : '',
           arquivo: null,
           titulosecao : 'Equipamento',
           atualizar : false,

           dataModificacao : new Date,
           descricaoModificacao : '',
        }
    }

    buscarPorId = (event) => {
        event.preventDefault();
        
        axios.get('http://localhost:5000/api/equipamento/', {
        })
    }

    alterarEstadoEsquipamento = (alteracao) => {
        this.setState({

        })
    }

    upload = (event) => {
        event.preventDefault();

        const formData = new FormData();

        formData.append(
            'arquivo', 
            this.state.arquivo
        )

        axios.post('http://localhost:5000/api/equipamento/', formData, {
            headers : {
                Authorization : 'Bearer' + localStorage.getItem
                ('usuario-login')
            }
            
        }) 
        .catch( (erro) => console.log(erro))
        .then(console.log("Arquivo Enviado"))
    }

    atualizaStateCampo = (campo) => {
        this.setState({ [campo.target.name] : campo.target.value })
    }

    atualizaEquipamento = (campo) => {
        campo.preventDefault();

        axios
        .put('')
    }

    render(){
        return(
            <div className="container">
                <div>
                <div className="barra-esquerda">
                        <div className="container-barra">
                            <nav className="Logo">
                                <Link to="/Home"><img src={Logo} alt="Logo da Rojo"/></Link>
                            </nav>
                            <div className="box-container">
                                <nav className="funcao-superior">

                                    <Link className= "cadastro" to="/CadastroEquipamento">
                                        <p className="cadastro-texto">
                                        Cadastro Equipamento

                                        </p>
                                    <div className="cadastro-box-anime">
                                        <div className="palito"></div>
                                        
                                    </div>
                                    </Link>
                                    <Link className= "funcao" to="/Listar Equipamento">
                                        <img src={la} alt="Icone de listagem"/>
                                        <p>Listar Equipamentos</p>
                                    </Link>
                                    <Link className= "funcao" to="/Historico">
                                        <img src={ho} alt="Icone de histórico"/>
                                        <p>Histórico</p>
                                    </Link>
                                    <Link className= "funcao" to="/Topologia">
                                        <img src={ta} alt="Icone de topologia"/>
                                        <p>Topologia</p>
                                    </Link>
                                    <Link className= "funcao" to="/Alertas">
                                        <img src={aa} alt="Icone de topologia"/>
                                        <p>Alerta</p>
                                    </Link>


                                </nav>
                                <div className="funcao-inferior">

                                    <Link className="container-link" to="/grafana">
                                        <div className="btn-link">
                                            <img src={Grafana} alt="Logo do Grafana"></img>
                                        </div>
                                        <p>Grafana</p>
                                        <img src={Linq} alt="Logo da Grafana"/>
                                    </Link>

                                    <Link className="container-link" to="/graylog">
                                        <div className="btn-link">
                                            <img src={Graylog} alt="Logo do Graylog"></img>
                                        </div>
                                        <p>Graylog</p>
                                        <img src={Linq} alt="Logo do Graylog"/>
                                    </Link>

                                    <Link className="container-link" to="/zabbix">
                                        <div className="btn-link">
                                            <img src={Zabbix} alt="Logo do Zabbix"></img>
                                        </div>
                                        <p>Zabbix</p>
                                        <img src={Linq} alt="Logo do Zabbix"/>
                                    </Link>
                                </div>

                            </div>
                                <div class="btn-container-mode">
                                    <p> MODO ESCURO</p>
                                    <button className="btn-mode">
                                        <div className="btn-mode-interruptor">
                                            <div className="btn-mode-bola">
                                            </div>
                                        </div>
                                    </button>
                                </div>



                        </div>
                            <div className="container-inferior">
                                <div className="container-perfil">
                                        <div
                                            className="perfil-imagem"
                                            
                                        />
                                        <div>
                                            <p
                                            className="perfil-nome"
                                            value={this.state.nome}
                                            />
                                            <p
                                            className="perfil-cargo"
                                            value={this.state.cargo}
                                            />
                                            
                                        </div>
                                        <div>

                                            <button
                                                onClick={this.efetuarLogout}
                                            >
                                                <img src={Sair} alt="icone sair"/>
                                            </button>
                                        </div>
                                </div>
                            </div>
    
                </div>
            </div>
                <div className="conteudo-equipamento">

                    <header>
                        <h2 className="todo-titulo">Equipamento</h2>
                    </header>
                
                    <section>
                        <div className="container-direita">
                            <div className="barra-direita">
                                <div className="button">

                                    <button>
                                        <img src={Editar} alt="icone filtro"/>
                                    </button>

                                    <button
                                        onClick={this.alterarCondicao}
                                    >
                                    <img src={Filtro} alt="icone editar"/>
                                
                                    </button>

                                    <button>
                                        <img src={Ferramenta} alt="Icone ferramenta"/>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </section>

                    <section>
                            
                            <div className="container-info-equipamento">
                                <div className="con-equi-info">
                                    <div className="head-equi-info">
                                        <p>Dados {this.state.Modelo}</p>
                                    </div>
                                    <div className="container-box-info-dados">

                                        <div className="container-info-dados">

                                            <form onSubmit={this.atualizaEquipamento}>
                                                <div className="info-1">

                                                    <input
                                                        className="input"
                                                        type="text"
                                                        name="Modelo"
                                                        value={this.state.Modelo}
                                                        placeholder="Modelo"
                                                        onChange={this.atualizaStateCampo}
                                                        disabled = {this.state.atualizar === true ? 'none' : ''}
                                                    /> 

                                                    <input
                                                        className="input"
                                                        type="text"
                                                        name="NumeroSerie"
                                                        value={this.state.Modelo}
                                                        placeholder="Numero de Série"
                                                        onChange={this.atualizaStateCampo}
                                                        disabled = {this.state.atualizar === true ? 'none' : ''}
                                                    /> 

                                                    <input
                                                        className="input"
                                                        type="text"
                                                        name="modelo"
                                                        value={this.state.Modelo}
                                                        placeholder="IP"
                                                        onChange={this.atualizaStateCampo}
                                                        disabled = {this.state.atualizar === true ? 'none' : ''}
                                                    /> 

                                                    <input
                                                        className="input"
                                                        type="text"
                                                        name="img64"
                                                        value={this.state.Modelo}
                                                        placeholder="imagem equipamento"
                                                        onChange={this.atualizaStateCampo}
                                                        disabled = {this.state.atualizar === true ? 'none' : ''}
                                                    /> 

                                                    <input
                                                        className="input"
                                                        type="text"
                                                        name="modelo"
                                                        value={this.state.Modelo}
                                                        placeholder="Modelo"
                                                        onChange={this.atualizaStateCampo}
                                                        disabled = {this.state.atualizar === true ? 'none' : ''}
                                                    /> 
                                                </div>
                                                <div className="info-2">

                                                    <input
                                                        className="input"
                                                        type="text"
                                                        name="descricao"
                                                        value={this.state.descricao}
                                                        placeholder="Descricao"
                                                        onChange={this.atualizaStateCampo}
                                                        disabled = {this.state.atualizar === true ? 'none' : ''}
                                                    /> 
                                                    <input
                                                        className="input"
                                                        type="text"
                                                        name="modelo"
                                                        value={this.state.Modelo}
                                                        placeholder="Modelo"
                                                        onChange={this.atualizaStateCampo}
                                                        disabled = {this.state.atualizar === true ? 'none' : ''}
                                                    /> 
                                                </div>
                                            </form>
                                        </div>
                                        <div className="container-img">
                                            <div className="box-img" />

                                            <input type="file"/>
                                            <button onClick={this.upload }>Enviar</button>
                                        </div>
                                    </div>



                                </div>
                            </div>
                    </section>
        
                </div>
            </div>
        )
    }
}