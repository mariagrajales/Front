import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/molecules/Navbar';
import Grupos from './components/organisms/Grupos';
import Temario from './components/organisms/Temarios';
import GrupoDetail from './components/organisms/GrupoDetail';
import Contenido from './components/organisms/Contenido';
import './styles.css';
import Actividades from './components/organisms/Actividades';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Grupos />} />
      <Route path="/temarios" element={<Temario />} />
      <Route path="/actividades" element={<Actividades />} />
      <Route path="/grupo/:id" element={<GrupoDetail />} />
      <Route path="/contenido" element={<Contenido />} />
    </Routes>
  </Router>
);

export default App;

