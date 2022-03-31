import { Component } from "react";

export default class ListaEquipamento extends Component{
    constructor(props){
        super(props)
        this.state = {
            listaEquipamento : [],

        }
    }   

    render(){
        return(
            <div>
                <header>
                    
                </header>
                <main>

                    {listaEquipamento.map(item =>

                    <div className ="card" key={item.id}>
                        <p>{item.tipoEquipamento}</p>
                        <p>{item.Modelo}</p>
                        <p>{item.NumeroSerie}</p>
                        <img src={"item."}></img>
                    </div>
                     )} 
                </main>
            </div>
        );
    }
    
    
}