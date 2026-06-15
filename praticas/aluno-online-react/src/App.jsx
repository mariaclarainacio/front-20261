import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Faltas from "./pages/Faltas/Faltas";
import Notas from "./pages/Notas/Notas";
import Boletos from "./pages/Boletos/Boletos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="faltas" element={<Faltas />} />
        <Route path="notas" element={<Notas />} />
        <Route path="boletos" element={<Boletos />} />
      </Route>
    </Routes>
  );
}

export default App;