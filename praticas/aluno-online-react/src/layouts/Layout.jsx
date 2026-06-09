import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Menu from '../components/Menu/Menu';
import './Layout.css';

function Layout() {
  return (
    <div className="layout-geral">
      <Header />
      <div className="corpo-projeto">
        <Menu />
        <main className="conteudo-dinamico">
          <Outlet /> 
        </main>
      </div>
    </div>
  );
}

export default Layout;