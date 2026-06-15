import './Sidebar.css';

function Sidebar({ children }) {
  return (
    <aside className="sidebar-container">
      {children}
    </aside>
  );
}

export default Sidebar;