import React from 'react';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './pages/Login';
import Registro from './pages/Registro';
import RecuperarContraseña from './pages/RecuperarContraseña';
import CodigoRecuperar from './pages/CodigoRecuperar';
import SolicitarTurno from './pages/SolicitarTurno';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/registro">
            <Registro />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/recuperarContraseña">
            <RecuperarContraseña />
          </Route>
          
          <Route exact path="/solicitarTurno">
            <SolicitarTurno />
          </Route>

          <Route path="/codigoRecuperar">
            <CodigoRecuperar />
          </Route>


        </Switch>
      </Router>
    </>
  );
}

export default App;
