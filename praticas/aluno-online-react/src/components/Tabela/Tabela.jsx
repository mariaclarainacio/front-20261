import './Tabela.css';

function Tabela({ cabecalho = [], dados = [] }) {
  return (
    <table className="tabela-estilizada">
      <thead>
        <tr>
          {cabecalho.map((titulo, index) => (
            <th key={index}>{titulo}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dados.map((linha, index) => (
          <tr key={index}>
            {Object.values(linha).map((valor, idx) => (
              <td key={idx}>{valor}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabela;