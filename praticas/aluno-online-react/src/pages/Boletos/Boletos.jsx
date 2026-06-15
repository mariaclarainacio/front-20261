import './Boletos.css';

function Boletos() {
  return (
    <div className="pagina-conteudo">
      <h1>Financeiro / Boletos</h1>
      <p>Mensalidade Abril/2026: <strong>Pago</strong></p>
      <p>Mensalidade Maio/2026: <strong>Aberto</strong></p>
      <button>Gerar PDF</button>
    </div>
  );
}
export default Boletos;