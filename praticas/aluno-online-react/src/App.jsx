import Card from './components/Cards/Card';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Painel do Aluno</h1>

      <h2>AVISOS</h2>
      <Card 
        titulo="Aviso Importante" 
        subtitulo="Postado em 13/04/2026"
        conteudo="A aula de amanhã será remota via Teams."
        corBorda="red"
      />

      <h2>Frontend</h2>
      <Card 
        titulo="Desenvolvimento Web" 
        subtitulo="Professor: Jose Reginaldo"
        corBorda="blue"
      >
        <p>Média Atual: <strong>9.5</strong></p>
        <button>Ver Detalhes</button>
      </Card>
    </div>
  );
}

export default App;