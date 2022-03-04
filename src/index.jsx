import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Promocoes from './Pages/Promocoes/Promocoes';
import Precos from './Pages/Precos/Precos';
import Contato from './Pages/Contato/Contato';
import Destinos from './Pages/Destinos/Destinos';
import NovoDestino from './Pages/Destinos/NovoDestino';
import NovaPromocao from './Pages/Promocoes/NovaPromocao';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


ReactDOM.render(


  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Promocoes" element={<Promocoes/>}></Route>
        <Route path="/Precos" element={<Precos/>}></Route>
        <Route path="/Contato" element={<Contato/>}></Route>
        <Route path="/Destinos" element={<Destinos/>}></Route>
        <Route path="/NovoDestino" element={<NovoDestino/>}></Route>
        <Route path="/NovaPromocao" element={<NovaPromocao/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')



);



