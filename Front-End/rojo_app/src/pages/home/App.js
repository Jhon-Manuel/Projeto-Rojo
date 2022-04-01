import './App.css';

import logo from  '../../assets/img/logoRojo.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <img src={logo} alt="Logo Rojo"/>

          <nav className="cabecalhoPrincipal-nav">
            {
              <a className='cabecalhoPrincipal-nav-login' href="/Login">Login</a>
            }
          </nav>
        </div>
      </header>
    </div>
  );
}

export default App;
