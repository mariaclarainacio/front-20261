import Card from '../../components/Cards/Card';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="pagina-dashboard">
      <h1>Portal do Aluno</h1>

      <div className="dashboard-grid">
        <Card 
          titulo="Faltas" 
          subtitulo="Total acumulado" 
          conteudo="5" 
          corBorda="#e74c3c" 
        />
        <Card 
          titulo="Notas" 
          subtitulo="Média do semestre" 
          conteudo="8.5" 
          corBorda="#2ecc71" 
        />
        <Card 
          titulo="Avisos" 
          subtitulo="Secretaria" 
          conteudo="Nenhum pendente" 
          corBorda="#3498db" 
        />
      </div>
    </div>
  );
}

export default Dashboard;