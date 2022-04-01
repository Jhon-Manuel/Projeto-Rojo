import { Component } from "react";
import { axios } from 'axios';

export class cadastrarEquipamento extends Component{
    constructor(props){
        super(props);
        this.state = {
            tipoEquipamento : 0,
            Modelo : 0,
            NumeroSerie : 0,
            Gateway : 0,
            IP : 0,
            DNS : 0,
            Porta : 0,
            DataEntrada : new Date(),
            imagemEquipamento : '',
            listaEquipamento : [],
        }
    }

    listarEquipamento = () =>
    {
        axios('http://localhost:5000/api/cadastrarEquipamento', {
            headers : {
                'Authorization' : 'Bearer' + localStorage.getItem('usuario-login')
            }   
        }
        
    )}

   
    atualizaStateCampo = async (campo) => {
        await this.setState({
            [ campo.target.name ]: campo.target.value
        })

        console.log(this.state.campo);
    }

   
    CriarEquipamento = () => {
        
    }

    render() {
        return(
            <div>
                <header>

                </header>
                <main>
                    <section>
                        <h1>NOVO EQUIPAMENTO</h1>
                        <button type="submit">Busque um equipamento</button>
                    </section>
                    <section>
                        <h2>Dados {this.state.NumeroSerie}</h2>

                        <form>
                            <input type=""
                                value={this.state.NumeroSerie}
                                placeholder="Número de Série"
                                onChange={this.atualizarEstadoNumeroSerie}
                            />
                            <input type=""
                                value={this.state.Gateway}
                                placeholder="GateWay"
                                onChange={this.atualizarEstadoGateWay}
                            />
                            <input type=""
                                value={this.state.IP}
                                placeholder="IP"
                                onChange={this.atualizarEstadoIP}
                            />
                            <input type=""
                                value={this.state.DNS}
                                placeholder="DNS"
                                onChange={this.atualizarEstadoDNS}
                            />
                            <input type=""
                                value={this.state.Porta}
                                placeholder="Porta"
                                onChange={this.atualizarEstadoPorta}
                            />

                            <button 
                            type="submit"
                            className="btn-cadastrar"
                            >
                                Cadastrar

                            </button>
                       
                        </form>
                    </section>

                </main>

            </div>
        )
    }
}