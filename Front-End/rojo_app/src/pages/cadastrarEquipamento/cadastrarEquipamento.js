import { Component } from "react";

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

    atualizarEstadoNumeroSerie = async (event) => {
        await this.setState({
            NumeroSerie: event.target.value
        })

        console.log(this.state.NumeroSerie);
    }
    
    atualizarEstadoGateWay = async (event) => {
        await this.setState({
            Gateway: event.target.value
        })

        console.log(this.state.Gateway);
    }

    atualizarEstadoIP = async (event) => {
        await this.setState({
            IP: event.target.value
        })

        console.log(this.state.IP);
    }

    atualizarEstadoDNS = async (event) => {
        await this.setState({
            DNS: event.target.value
        })

        console.log(this.state.DNS);
    }

    atualizarEstadoPorta = async (event) => {
        await this.setState({
            Porta: event.target.value
        })

        console.log(this.state.Porta);
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