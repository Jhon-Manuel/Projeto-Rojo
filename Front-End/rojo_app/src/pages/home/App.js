import { Link } from 'react-router-dom';

import './App.css';

import logo from  '../../assets/img/logoRojo.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">

          <nav className="cabecalhoPrincipal-nav">
            
              <Link className="BoxLogo" to="/" img src={logo}></Link>
              <Link className="cabecalhoPrincipal-nav-login" to="/Login">Login</Link>
      
          </nav>
        </div>
      </header>
    </div>
  );
}

export default App;
