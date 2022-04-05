import React, { Component } from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';

import './index.css';

import Home from './pages/home/App';
import Equipamento from './pages/equipamento/equipamento.jsx';
import Alerta from './pages/alerta/alerta';
import ListaEquipamento from './pages/listaEquipamento/listaEquipamento';
import Historico from './pages/historico/historico';
import Erro  from './pages/erro/erro';
import Login from './pages/login/login';
import CadastrarUsuario from './pages/cadastrarUsuario/cadastrarUsuario';
import CadastrarEquipamento from './pages/cadastrarEquipamento/cadastrarEquipamento';
import Topologia from './pages/topologia/topologia';


import reportWebVitals from './reportWebVitals';
import {ProtectedRoutes } from './services/auth';


const root = document.getElementById('root');
const routing = createRoot(root);

routing.render(
    <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path="/Equipamento" element={<Equipamento/>}/>
          <Route path="/Alerta" element={<Alerta/>}/>
          <Route path="/ListaEquipamento" element={<ListaEquipamento/>}/>
          <Route path="/Topologia" element={<Topologia/>}/>
          <Route path="/Historico" element={<Historico/>}/>
          <Route path="/ListaEquipamento" element={<Alerta/>}/>

        </Route>
        <Route path="/Login" element={<Login />}/>
        <Route path="/CadastrarUsuario" element={<CadastrarUsuario/>}/>
        <Route path="/CadastrarEquipamento" element={<CadastrarEquipamento/>}/>
        <Route path="/Erro" element={<Erro/>} />
        <Route path='/Zabbix' element={() => {
            window.location.href ='https://www.zabbix.com/';
            return null;
        }}/>
        <Route
        path="/*"
        element={<Navigate to="/Erro" replace />}
        />
      </Routes>
    </div>
  </Router>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
