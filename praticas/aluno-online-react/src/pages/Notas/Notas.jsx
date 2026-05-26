import Tabela from '../../components/Tabela/Tabela';

function Notas() {
  const colunas = ['Disciplina', 'A1', 'A2', 'Média', 'Situação'];

  const listaNotas = [
    {
      disciplina: 'Análise de Sistemas',
      a1: '8.0',
      a2: '9.0',
      media: '8.5',
      situacao: 'Aprovado'
    },
    {
      disciplina: 'Programação Java',
      a1: '7.5',
      a2: '8.5',
      media: '8.0',
      situacao: 'Aprovado'
    }
  ];

  return (
    <div>
      <h2>Minhas Notas</h2>
      <Tabela cabecalho={colunas} dados={listaNotas} />
    </div>
  );
}

export default Notas;