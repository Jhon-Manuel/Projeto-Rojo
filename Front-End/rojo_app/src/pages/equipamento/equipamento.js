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

    





    render(){
        return(
            <div>
                <header>

                </header>
                <main>
                    <h1>ksksk</h1>
                    <p>asdfasdf</p>
                </main>
            </div>
        )
    }
}