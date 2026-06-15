import { NavLink } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <nav className="menu">
      <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
        Dashboard
      </NavLink>
      <NavLink to="/faltas" className={({ isActive }) => (isActive ? "active" : "")}>
        Faltas
      </NavLink>
      <NavLink to="/notas" className={({ isActive }) => (isActive ? "active" : "")}>
        Notas
      </NavLink>
      <NavLink to="/boletos" className={({ isActive }) => (isActive ? "active" : "")}>
        Boletos
      </NavLink>
    </nav>
  );
};

export default Menu;