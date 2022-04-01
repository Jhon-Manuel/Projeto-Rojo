import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Navigate, Routes} from 'react-router-dom';

import './index.css';

import Home from './pages/home/App';
import {Equipamento} from './pages/equipamento/equipamento';
import {Alerta} from './pages/alerta/alerta';
import {ListaEquipamento} from './pages/listaEquipamento/listaEquipamento';
import {Historico} from './pages/historico/historico';
import Erro  from './pages/erro/erro';
import {Login} from './pages/login/login';


import reportWebVitals from './reportWebVitals';

const routing  = (
  <Router>
    <div>
      <Routes>
        <Route exact path="/" component={Home}/>
        <Route path="/Equipamento" component={Equipamento}/>
        <Route path="/Alerta" component={Alerta}/>
        <Route path="/ListaEquipamento" component={ListaEquipamento}/>
        <Route path="/Historico" component={Historico}/>
        <Route path="/ListaEquipamento" component={Alerta}/>
        <Route path="/Login" component={Login}/>
        <Route path="/Erro" component={Erro} />
        <Route
        path="*"
        element={<Navigate to="/Erro" replace />}
    />
      </Routes>
    </div>
  </Router>
);

ReactDOM.render(routing , document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
