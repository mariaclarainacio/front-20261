import './Dashboard.css';

function Dashboard() {
  return (
    <div className="pagina-conteudo">
      <h1>Bem-vinda, Maria Clara!</h1>
      <div className="cards-resumo">
        <div className="card"><h3>Notas</h3><p>Média Global: 8.5</p></div>
        <div className="card"><h3>Faltas</h3><p>Total: 6</p></div>
        <div className="card"><h3>Avisos</h3><p>2 novos requerimentos</p></div>
      </div>
    </div>
  );
}
export default Dashboard;