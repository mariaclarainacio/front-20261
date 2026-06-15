import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Boletos from './pages/Boletos/Boletos';
import Faltas from './pages/Faltas/Faltas';
import Notas from './pages/Notas/Notas';
import Requerimentos from './pages/Requerimentos/Requerimentos';
import RequerimentoForm from './forms/RequerimentoForm';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/boletos" element={<Boletos />} />
      <Route path="/faltas" element={<Faltas />} />
      <Route path="/notas" element={<Notas />} />
      <Route path="/requerimentos" element={<Requerimentos />}>
        <Route path="novo" element={<RequerimentoForm />} />
      </Route>
    </Routes>
  );
}