import { Component } from "react";
import axios from "axios";

{/*import { PythonShell } from 'python-shell';*/}
{/*PythonShell.runString(
    'from tkinter import *;Tk().mainloop()',
    null,
    function (err) {
        if (err) throw err;
        console.log('finishid');
    }
);*/}

export class Equipamento extends Component{
    constructor(props){
        super(props)
        this.state = {
           listaEquipamento : [],
           Modelo : 0,
           NumeroSerie : 0,
           IP : 0,
           img64 : '',
           arquivo: null,
        }
    }

    listarEquipamento = (event) => {
        event.preventDefault();
        
        axios.get('http://localhost:5000/api/equipamento/', {
            Modelo : event.Modelo
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





    render(){
        return(
            <div>
                <header>

                </header>
                <main>
                    <section>
                        <h1>Equipamento</h1>
                        <div>
                            <div>

                            </div>
                            <input type="file"/>
                            <button onClick={this.upload }>Enviar</button>
                            <input src="" alt="Imagem de perfil"/>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}