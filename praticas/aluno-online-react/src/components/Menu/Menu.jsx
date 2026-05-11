import { NavLink } from 'react-router-dom';
import './Menu.css';

function Menu() {
  return (
    <nav className="menu-lateral">
      <ul>
        <li>
          <NavLink to="/" end>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/notas">Notas</NavLink>
        </li>
        <li>
          <NavLink to="/faltas">Faltas</NavLink>
        </li>
        <li>
          <NavLink to="/boletos">Boletos</NavLink>
        </li>
        <li>
          <NavLink to="/requerimentos">Requerimentos</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
