import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Central from './Componentes/Pages/Central';
import QuemSomos from './Componentes/Pages/QuemSomos';
import Serviços from './Componentes/Pages/Central';
import Contactos from './Componentes/Pages/Central';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path='/' exact component={Central}  />
        <Route path='/quemsomos' component={QuemSomos}  />
        <Route path='/serviços' component={Serviços}  />
        <Route path='/contactos' component={Contactos}  />
      </Switch>
    </Router>
    </>
  );
}

export default App;