import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import Notas from './pages/Notas/Notas';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="notas" element={<Notas />} />
        <Route path="faltas" element={<div>Página de Faltas</div>} />
      </Route>
    </Routes>
  );
}

export default App;
