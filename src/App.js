import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Central from './Componentes/Pages/Central';
import QuemSomos from './Componentes/Pages/QuemSomos';
import Serviços from './Componentes/Pages/Serviços';
import Contactos from './Componentes/Pages/Contactos';
import Footer from './Componentes/Footer';
import Navbar from './Componentes/Navbar';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Central}  />
        <Route path='/quemsomos' component={QuemSomos}  />
        <Route path='/serviços' component={Serviços}  />
        <Route path='/contactos' component={Contactos}  />
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;