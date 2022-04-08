import { Link } from 'react-router-dom';

import './App.css';

import logo from  '../../assets/img/logoRojo.png'
import bg from '../../assets/img/gra.png'

function App() {
  return (
    <div className="App">

      <div className='container-app'>

        <header className="App-header">
          <div className="container">

            <nav className="cabecalhoPrincipal-nav">
              
                <Link className="BoxLogo" to="/"><img src={logo} alt="Logo da rojo"/></Link>
                <Link className="cabecalhoPrincipal-nav-login" to="/Login">
                  <p className='text-login'>FAÇA LOGIN</p>
                </Link>
        
            </nav>
          </div>
        </header>

        <main>

            <div className="container-home">

              <div className='home-banner'>
                  <div className='home-info'>
                    <div className='info-text'>
                      <h1>Rojo infraestrutura</h1>
                      <p>
                        Incie sua organização empresarial pelas bases do seu negócio.
                        Com uma infraestrutura a  distância de um dedo.
                      </p>
                      <nav>
                        <div className='info-text-p'>
                          INICIAR

                        </div>
                      </nav>

                    </div>
                    <div className='home-img'/>
                  </div>
              </div>
          </div>
          <div className='container-home-2'/>
          <div className='footer'><p>Copyright © 2021 | All Rights Reserved By Rojo</p></div>
        </main>
      </div>

        
          <div className='container-servicos'>
              <div className='box-app-1'>
                <div className='app-1'>
                  <h2>Otimeze sua forma de trabalhar </h2>
                  <p>Trazemos o melhores recursos de infraestrutura de redes em tempo real
                      em um unico lugar </p>
                  <div className='img'/>
                </div>
              </div>
              <p className='app-1-text'>O Zabbix, uma ferramenta de software de código aberto para monitorar a infraestrutura de TI, como redes, servidores, máquinas virtuais e serviços em nuvem</p>
          </div>

          <div className='container-servicos-2'>
              <div className='box-app-1-2'>
                <div>

                  <div className='img-gra'/>
                  <p className='app-1-text-2'>O Grafana, sendo uma solução de código aberto, também nos permite escrever plug-ins do zero para integração com várias fontes de dados diferentes. A ferramenta nos ajuda a estudar, analisar e monitorar dados ao longo de um período de tempo, tecnicamente chamado de análise de série temporal.</p>
                </div>
                <div className='app-1-2'>
                  {/* <h2>Otimeze sua forma de trabalhar </h2>
                  <p>Trazemos o melhores recursos de infraestrutura de redes em tempo real
                      em um unico lugar </p> */}
                  <div className='img-2'/>
                </div>
              </div>
          </div>
  </div>
  );
}

export default App;
