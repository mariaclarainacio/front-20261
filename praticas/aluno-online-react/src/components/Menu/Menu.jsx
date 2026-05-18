import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Menu() {
  const { logout } = useAuth();

  return (
    <nav className="sidebar-menu">
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/faltas">Faltas</Link></li>
        <li>
          <button onClick={logout} className="btn-logout">
            Sair
          </button>
        </li>
      </ul>
    </nav>
  );
}
