import axios from "axios";
import { Component, useEffect, useState } from "react";

export default function ListaEquipamento (){
    const [ listaEquipamento, setListaEquipamento ] = useState([])

    function buscarMeusEquipamentos() {
        axios('http://localhost:5000/api/equipamento/ ', {
            headers : {
                'Authorization' : 'Bearer' + localStorage.getItem('usuario-login')
                }
        
            })
            .then(response => {
                if(response.status === 200) {
                    //console.log(response);
                    setListaEquipamento( response.data ); 
                }
            })
            .catch( erro => console.log(erro) );
    };

    useEffect( buscarMeusEquipamentos, [] );

    

    return(
            <div>
                <header>
                    
                </header>
                <main>
                    <section>
                        
                        {listaEquipamento.map(item =>

                        <div className ="card" key={item.id}>
                            <p>{item.tipoEquipamento}</p>
                            <p>{item.Modelo}</p>
                            <p>{item.NumeroSerie}</p>
                            <img src={{}}></img>
                        </div>
                        )} 
                    </section>
                </main>
            </div>
        );
    }
    
    
