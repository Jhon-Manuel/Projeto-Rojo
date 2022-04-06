import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

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


export default function CadastroEquipamento() {

    var navigate = useNavigate();
    
    const [Loading, setLoading] = useState(false);
    const [boolPut, setBoolPut] = useState(false);

    //States Usuario
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');

    //States Equipamento
    const [idEquipamento, setIdEquipamento] = useState(0);
    const [idTipoEquipamento, setIdTipoEquipamento] = useState(0);
    const [modelo, setModelo] = useState(0);
    const [numeroSerie, setNumeroSerie] = useState(0);
    const [gateWay, setGateWay] = useState(0);
    const [ip, setIp] = useState(0);
    const [dns, setDns] = useState(0);
    const [porta, setPorta] = useState(0);
    const [img64, setImg64] = useState(0);
    const [arquivo, setArquivo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [condicao, setCondicao] =useState('');

    //Listas
    const [listaTipoEquipamento, setListaEquipamento] = useState([]);


    function listaTipoequipamento(){
        axios.get('http://localhost:5000/api/Usuario/',{})

        .then(resposta => resposta.status === 201)
    }

    function buscarUsuarioPorId(event)
    {
        event.preventDefault();
        
        axios.get('http://localhost:5000/api/Usuario/', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })

        .then((resposta) => {
            if(resposta.status === 200){
                navigate('/Equipamento')
            }
                
            }
        )
        .catch(erro => console.log(erro))

    }
    
        return(   
            <div className="container-equipamento">
                <div>
                    <div className="container-barra-esquerda">
                        <div className="barra-superior">
                            <nav  className="Logo">
                                <Link to="/"><img src={Logo} alt="Logo da Rojo"/></Link>
                            </nav>
                            <div className="box-container-link">
                                <nav className="funcao-superior">

                                    <Link className= "cadastro" to="/CadastrarEquipamento">
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
                        <div className="barra-inferior">
                                <div className="container-perfil">
                                        <div
                                            className="perfil-imagem"
                                            
                                        />
                                        <div className="perfil-texto">
                                            <p
                                            className="perfil-nome">{this.state.nome}</p>
                                                               
                                            <p
                                            className="perfil-cargo">
                                                {this.state.cargo}
                                            </p>
                                            
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
                        <h2 className="todo-titulo">Cadastrar Equipamento</h2>
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
                                            {/* <div className="head-equi-info">
                                                <p>Dados {this.state.Modelo}</p>
                                            </div> */}
                                            <div className="container-box-info-dados-2">

                                                <div className="container-info-dados">

                                                    <form onSubmit={this.atualizaEquipamento}>
                                                        <div className="dados">
                                                            <div className="info-1">
                                                                <div>

                                                                    <p>
                                                                        Tipo Equipamento
                                                                    </p>                         
                                                                    <input
                                                                        className="input"
                                                                        type="text"
                                                                        name="tipoEquipamento"
                                                                        value={idTipoEquipamento}
                                                                        placeholder="Tipo Equipamento"
                                                                        onChange={this.atualizaStateCampo}
                                                                        disabled = {this.state.atualizar === true ? 'none' : ''}
                                                                    /> 
                                                                </div>


                                                                <div>

                                                                    <p>
                                                                        Modelo
                                                                        </p>                         
                                                                    <input
                                                                        className="input"
                                                                        type="text"
                                                                        name="Modelo"
                                                                        value={this.state.Modelo}
                                                                        placeholder="Modelo"
                                                                        onChange={this.atualizaStateCampo}
                                                                        disabled = {this.state.atualizar === true ? 'none' : ''}
                                                                    /> 
                                                                </div>

                                                                <div>

                                                                    <p>
                                                                        GateWay
                                                                        </p>                         
                                                                    <input
                                                                        className="input"
                                                                        type="text"
                                                                        name="Gateway"
                                                                        value={this.state.Gateway}
                                                                        placeholder="GateWay"
                                                                        onChange={this.atualizaStateCampo}
                                                                        disabled = {this.state.atualizar === true ? 'none' : ''}
                                                                    /> 
                                                                </div>

                                                                <div>

                                                                    <p>
                                                                        Mask
                                                                        </p>                         
                                                                    <input
                                                                        className="input"
                                                                        type="text"
                                                                        name="IP"
                                                                        value={this.state.IP}
                                                                        placeholder="IP"
                                                                        onChange={this.atualizaStateCampo}
                                                                        disabled = {this.state.atualizar === true ? 'none' : ''}
                                                                    /> 
                                                                </div>

                                                                <div>

                                                                    <p>
                                                                        Descricao
                                                                        </p>                         
                                                                    <input
                                                                        className="input"
                                                                        type="text"
                                                                        name="descricao"
                                                                        value={this.state.descricao}
                                                                        placeholder="Descrição"
                                                                        onChange={this.atualizaStateCampo}
                                                                        disabled = {this.state.atualizar === true ? 'none' : ''}
                                                                    /> 
                                                                </div> 
                                                            </div>
                                                            <div className="info-2">

                                                                <div>

                                                                    <p>
                                                                        DNS
                                                                        </p>                         
                                                                    <input
                                                                        className="input"
                                                                        type="text"
                                                                        name="DNS"
                                                                        value={this.state.DNS}
                                                                        placeholder="Modelo"
                                                                        onChange={this.atualizaStateCampo}
                                                                        disabled = {this.state.atualizar === true ? 'none' : ''}
                                                                    /> 
                                                                </div> 

                                                                <div>

                                                                    <p>
                                                                        Porta
                                                                        </p>                         
                                                                    <input
                                                                        className="input"
                                                                        type="text"
                                                                        name="Porta"
                                                                        value={this.state.Porta}
                                                                        placeholder="Porta"
                                                                        onChange={this.atualizaStateCampo}
                                                                        disabled = {this.state.atualizar === true ? 'none' : ''}
                                                                    /> 
                                                                </div>

                                                                <div>

                                                                    <p>
                                                                        Numero de Série
                                                                    </p>                         
                                                                    <input
                                                                        className="input"
                                                                        type="text"
                                                                        name="NumeroSerie"
                                                                        value={this.state.NumeroSerie}
                                                                        placeholder="Numero de Série"
                                                                        onChange={this.atualizaStateCampo}
                                                                        disabled = {this.state.atualizar === true ? 'none' : ''}
                                                                    /> 
                                                                </div> 
                                                                
                                                                {
                                                                    this.state.isLoading === true && (

                                                                        <button
                                                                        type="submit"
                                                                        disabled
                                                                        className="btn__login"
                                                                        id="btn__login"
                                                                        >
                                                                        Loading...
                                                                        </button>
                                                                )

                                                                }
                                                                {
                                                                    this.state.isLoading === false &&(
                                                                        <button
                                                                            type="submit"
                                                                            className="btn__login-2"
                                                                            disabled={
                                                                                this.state.tipoEquipamento === '' || 
                                                                                this.state.Modelo === '' || 
                                                                                this.state.NumeroSerie === '' |
                                                                                this.state.Gateway === '' ||
                                                                                this.state.DNS === ''||
                                                                                this.state.IP === ''||
                                                                                this.state.Porta === '' 
                                                                                ? 'none'
                                                                                : ''
                                                                            }
                                                                        >    
                                                                            Cadastrar
                                                                        </button>
                                                                    )
                                                                }
                                                                </div>

                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="container-img">
                                                    <div className="box-img" />s

                                                    <input type="file"/>
                                                    <button onClick={this.upload }>Enviar</button>
                                                    
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                    </section>
        
                </div>
            </div>
        );
    

}
