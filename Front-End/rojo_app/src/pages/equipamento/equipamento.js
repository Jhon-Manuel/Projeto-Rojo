import { Component } from "react";
import { PythonShell } from 'python-shell';

PythonShell.runString(
    'from tkinter import *;Tk().mainloop()',
    null,
    function (err) {
        if (err) throw err;
        console.log('finishid');
    }
);

export class Equipamento extends Component{
    constructor(props){
        super(props)
        this.state = {
           listaEquipamento : []
        }
    }

    alterarEstadoEsquipamento = (alteracao) => {
        this.setState({

        })
    }





    render(){
        return(
            <div>
                <header>

                </header>
                <main>
                    <h1>Equipamento</h1>
                    <div>
                        <table >
                            <tr>
                                <th></th>
                            </tr>
                        </table>
                    </div>
                </main>
            </div>
        )
    }
}