import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu/Menu'; 

const Layout = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Menu />
      <main style={{ 
        flex: 1, 
        padding: '20px', 
        backgroundColor: '#f4f7f6',
        minHeight: '100vh'
      }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
