import { Outlet } from "react-router-dom";
import Menu from "../Menu/Menu";

const Layout = () => {
  return (
    <div className="app-layout">
      <Menu />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;