import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Boletos() {
  const navigate = useNavigate();

  const dadosBoletos = [
    { vencimento: '19/01/2026', valor: '500,00', situacao: 'Pago' },
    { vencimento: '19/02/2026', valor: '500,00', situacao: 'Em atraso' },
    { vencimento: '19/03/2026', valor: '500,00', situacao: 'A Pagar' },
    { vencimento: '19/04/2026', valor: '500,00', situacao: 'A Pagar' },
    { vencimento: '19/05/2026', valor: '500,00', situacao: 'A Pagar' },
    { vencimento: '19/06/2026', valor: '500,00', situacao: 'A Pagar' },
    { vencimento: '19/07/2026', valor: '500,00', situacao: 'A Pagar' },
    { vencimento: '19/08/2026', valor: '500,00', situacao: 'A Pagar' },
    { vencimento: '19/09/2026', valor: '500,00', situacao: 'A Pagar' },
    { vencimento: '19/10/2026', valor: '500,00', situacao: 'A Pagar' },
    { vencimento: '19/11/2026', valor: '500,00', situacao: 'A Pagar' },
    { vencimento: '19/12/2026', valor: '500,00', situacao: 'A Pagar' },
    { vencimento: '19/01/2027', valor: '500,00', situacao: 'A Pagar' }
  ];

  const navegarPara = (item) => {
    const caminhos = {
      Dashboard: '/dashboard',
      Notas: '/notas',
      Faltas: '/faltas',
      Boletos: '/boletos',
      Requerimentos: '/requerimentos',
      Sair: '/'
    };
    navigate(caminhos[item]);
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Arial, sans-serif', backgroundColor: '#fff' }}>
      
      <div style={{ width: '240px', borderRight: '1px solid #e0e0e0', padding: '30px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px', paddingLeft: '10px' }}>
          <span style={{ fontSize: '24px' }}>🎓</span>
          <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>Aluno Online</span>
        </div>
        
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          {['Dashboard', 'Notas', 'Faltas', 'Boletos', 'Requerimentos', 'Sair'].map((item) => (
            <li 
              key={item} 
              style={{ 
                padding: '12px 15px', 
                color: item === 'Boletos' ? '#000' : '#666',
                fontWeight: item === 'Boletos' ? 'bold' : 'normal',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
              onClick={() => navegarPara(item)}
            >
              <span style={{ fontSize: '8px' }}>●</span> {item}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ flex: 1, padding: '40px 60px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h1 style={{ margin: 0, fontSize: '32px', fontWeight: 'bold', color: '#000' }}>Meus Boletos</h1>
          <div style={{ width: '45px', height: '45px', backgroundColor: '#e0e0e0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>👤</div>
        </div>

        <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#333', marginTop: '0', marginBottom: '25px' }}>
          Histórico de Pagamentos
        </h3>

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#dbdbdb', textAlign: 'left' }}>
              <th style={{ padding: '12px 15px', fontSize: '16px', color: '#000', fontWeight: 'bold' }}>Vencimento</th>
              <th style={{ padding: '12px 15px', fontSize: '16px', color: '#000', fontWeight: 'bold' }}>Valor R$</th>
              <th style={{ padding: '12px 15px', fontSize: '16px', color: '#000', fontWeight: 'bold' }}>Situação</th>
            </tr>
          </thead>
          <tbody>
            {dadosBoletos.map((boleto, index) => (
              <tr key={index} style={{ borderBottom: '1px solid #e0e0e0' }}>
                <td style={{ padding: '12px 15px', color: '#333', fontSize: '15px' }}>{boleto.vencimento}</td>
                <td style={{ padding: '12px 15px', color: '#333', fontSize: '15px' }}>{boleto.valor}</td>
                <td style={{ padding: '12px 15px', color: '#333', fontSize: '15px' }}>{boleto.situacao}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}