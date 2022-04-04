import { Component } from "react";
import { Link } from 'react-router-dom';

import Logo from '../assets/img/logoRojo.png';
import Sair from '../assets/icon/icon-sair.png';
import Linq from '../assets/icon/icon-link.png';
import Grafana from '../assets/icon/icon-grafana.png';
import Graylog from '../assets/icon/icon-graylog.png';
import Zabbix from '../assets/icon/icon-zabbix.png';



class BarraLateral extends Component{
    render(){
        return(
            <div>
                <div className="barra-direita">
                        <div container>
                            <nav>
                                <Link to="/Home"><img src={Logo} alt="Logo da Rojo"/></Link>
                            </nav>
                            <nav>
                                <Link to="/CadastroEquipamento">Cadastro Equipamento</Link>
                                <Link to="/Listar Equipamento">Listar Equipamentos</Link>
                                <Link to="/Historico">Historico</Link>
                                <Link to="/Topologia">TopoLogia</Link>
                                <Link to="/Alertas">Alertas</Link>

                                <Link className="container-link" to="/grafana">
                                    <div className="btn-link">
                                        <img src={Grafana} alt="Logo do Grafana"></img>
                                    </div>
                                    <p>Zabbix</p>
                                    <img src={Linq} alt="Logo da Grafana"/>
                                </Link>

                                <Link className="container-link" to="/graylog">
                                    <div className="btn-link">
                                        <img src={Graylog} alt="Logo do Graylog"></img>
                                    </div>
                                    <p>Zabbix</p>
                                    <img src={Linq} alt="Logo do Graylog"/>
                                </Link>

                                <Link className="container-link" to="/zabbix">
                                    <div className="btn-link">
                                        <img src={Zabbix} alt="Logo do Zabbix"></img>
                                    </div>
                                    <p>Zabbix</p>
                                    <img src={Linq} alt="Logo do Zabbix"/>
                                </Link>

                                <button className="btn-mode">
                                    <p>Dark Mode</p>
                                    <div className="btn-mode-interruptor">
                                        <div className="btn-mode-bola">
                                        </div>
                                    </div>
                                </button>

                                <div className="container-perfil">
                                        <div
                                            className="perfil-imagem"
                                            img src={this.state.foto}
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
                                    <button
                                        onClick={this.efetuarLogout}
                                    >
                                        <img src={Sair} alt="icone sair"/>
                                    </button>
                                </div>
                            </nav>



                        </div>
    
                </div>
            </div>
        )
    }
}
export default BarraLateral;