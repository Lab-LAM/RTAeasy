import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contato from '../pages/Contact';
import Download from '../pages/Download';
import Home from '../pages/Home';
import Missão from '../pages/Mission';
import Team from '../pages/Team';
import Tutorial from '../pages/Tutorial';

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tutorial' element={<Tutorial />} />
        <Route path='/download' element={<Download />} />
        <Route path='/equipe' element={<Team />} />
        <Route path='/contato' element={<Contato />} />
        {/* <Route path='/mission' element={<Missão />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
