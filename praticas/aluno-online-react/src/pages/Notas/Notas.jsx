import './Notas.css';

function Notas() {
  return (
    <div className="pagina-conteudo">
      <h1>Minhas Notas</h1>
      <table className="tabela-estilizada">
        <thead>
          <tr>
            <th>Disciplina</th>
            <th>A1</th>
            <th>A2</th>
            <th>Média</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento Web</td>
            <td>9.5</td>
            <td>8.0</td>
            <td>8.7</td>
          </tr>
          <tr>
            <td>Arquitetura de Software</td>
            <td>7.0</td>
            <td>9.0</td>
            <td>8.0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Notas;