import { useAuth } from '../../contexts/AuthContext';

export default function Topbar() {
  const { usuario } = useAuth();

  return (
    <header className="topbar">
      <h1>Aluno Online</h1>
      {usuario && <span className="user-info">Olá, {usuario.nome || usuario.email}</span>}
    </header>
  );
}
