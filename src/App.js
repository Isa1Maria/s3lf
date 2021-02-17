import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './Componentes/Navbar/Navbar';
import S3LF from './Componentes/Paginas/S3LF';
import QuemSomos from './Componentes/Paginas/QuemSomos';
import Serviços from './Componentes/Paginas/Serviços';
import Contactos from './Componentes/Paginas/Contactos';
import './App.css';

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Switch>
        <Route path="/" exact component={S3LF}/>
        <Route path="/quemsomos" component={QuemSomos}/>
        <Route path="/serviços" component={Serviços}/>
        <Route path="/contactos" component={Contactos}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;