import './Header.css';

function Header(props) {
  return (
    <header className="header-container">
        <div className="logo">Aluno Online</div>
        <div className="user-info">Olá, {props.nomeUsuario}</div>
    </header>
  );
}

export default Header;