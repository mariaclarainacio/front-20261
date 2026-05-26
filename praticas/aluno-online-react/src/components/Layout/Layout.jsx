import { Outlet } from "react-router-dom";
import Menu from "../Menu/Menu";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="app-container">
      <Menu />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;