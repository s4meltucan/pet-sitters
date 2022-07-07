import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Inicio from './routers/Inicio';
import Cuidadores from './routers/Cuidadores';
import Login from './routers/Login';
import NoEncontrada from './routers/NoEncontrada';
import Registro from './routers/Registro';
import PerfilCuidador from './routers/PerfilCuidador';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Inicio/>}/>
          <Route path='cuidadores' element={<Cuidadores />} />
          <Route path='perfilCuidador/:id' element={<PerfilCuidador />} />
          <Route path='login' element={<Login />} />
          <Route path='registro' element={<Registro />}/>
          <Route path='*' element={<NoEncontrada/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


