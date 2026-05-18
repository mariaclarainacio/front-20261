import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Faltas from './pages/Faltas/Faltas';

export default function App() {
  const { autenticado } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/login" 
          element={!autenticado ? <Login /> : <Navigate to="/" />} 
        />
        <Route 
          path="/" 
          element={autenticado ? <Dashboard /> : <Navigate to="/login" />} 
        />
        
        <Route 
          path="/faltas" 
          element={autenticado ? <Faltas /> : <Navigate to="/login" />} 
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
