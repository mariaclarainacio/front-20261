import './Faltas.css';

function Faltas() {
  return (
    <div className="pagina-conteudo">
      <h1>Registro de Faltas</h1>
      <table className="tabela-estilizada">
        <thead>
          <tr>
            <th>Disciplina</th>
            <th>Total de Aulas</th>
            <th>Faltas Acumuladas</th>
            <th>Situação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento Web</td>
            <td>40</td>
            <td>2</td>
            <td className="status-ok">Regular</td>
          </tr>
          <tr>
            <td>Arquitetura de Software</td>
            <td>40</td>
            <td>0</td>
            <td className="status-ok">Regular</td>
          </tr>
          <tr>
            <td>Banco de Dados</td>
            <td>40</td>
            <td>12</td>
            <td className="status-alerta">Atenção</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Faltas;