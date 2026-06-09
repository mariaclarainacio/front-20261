import { NavLink } from 'react-router-dom';
import './Menu.css';

function Menu() {
  const estiloAtivo = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
    color: isActive ? "#0056b3" : "#000",
  });

  return (
    <nav className="menu-lateral">
      <ul>
        <li>
          <NavLink to="/" style={estiloAtivo} end>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/notas" style={estiloAtivo}>Notas</NavLink>
        </li>
        <li>
          <NavLink to="/faltas" style={estiloAtivo}>Faltas</NavLink>
        </li>
        <li>
          <NavLink to="/boletos" style={estiloAtivo}>Boletos</NavLink>
        </li>
        <li>
          <NavLink to="/requerimentos" style={estiloAtivo}>Requerimentos</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;