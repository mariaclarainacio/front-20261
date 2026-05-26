import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./Menu.css";

const Menu = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

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
      <button onClick={handleLogout} className="logout-btn" style={{ marginLeft: 'auto', cursor: 'pointer' }}>
        Sair
      </button>
    </nav>
  );
};

export default Menu;