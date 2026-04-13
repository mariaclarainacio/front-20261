import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import './Layout.css';

function Layout({ children }) {
  return (
    <div className="layout-geral">
      <Header />
      <div className="corpo-projeto">
        <Menu />
        <main className="conteudo-dinamico">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;