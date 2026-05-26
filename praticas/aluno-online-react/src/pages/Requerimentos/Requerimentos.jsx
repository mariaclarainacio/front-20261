import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

export default function Requerimentos() {
  const navigate = useNavigate();
  const location = useLocation();
  const isBaseRoute = location.pathname === '/requerimentos';

  const dadosTabela = [
    { tipo: 'Revisão de Menção', data: '15/12/2025', situacao: 'Indeferido' },
    { tipo: 'Dispensa de Disciplina', data: '12/06/2025', situacao: 'Indeferido' },
    { tipo: 'Trancamento de Matrícula', data: '05/01/2024', situacao: 'Deferido' },
    { tipo: 'Mudança de Turno', data: '10/10/2023', situacao: 'Deferido' },
    { tipo: 'Renovação de Matrícula', data: '20/02/2023', situacao: 'Deferido' }
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
                color: item === 'Requerimentos' ? '#000' : '#666',
                fontWeight: item === 'Requerimentos' ? 'bold' : 'normal',
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
          <h1 style={{ margin: 0, fontSize: '32px', fontWeight: 'bold', color: '#000' }}>Meus Requerimentos</h1>
          <div style={{ width: '45px', height: '45px', backgroundColor: '#e0e0e0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>👤</div>
        </div>

        {isBaseRoute ? (
          <>
            <p style={{ color: '#000', fontSize: '20px', fontWeight: '500', marginTop: 0, marginBottom: '30px' }}>
              Faça solicitações online para a secretaria
            </p>
            
            <button 
              onClick={() => navigate('/requerimentos/novo')} 
              style={{ padding: '8px 16px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: '30px', fontWeight: 'bold', fontSize: '14px' }}
            >
              ➕ Novo Requerimento
            </button>

            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #ccc', textAlign: 'left' }}>
                  <th style={{ padding: '12px 8px', fontSize: '16px', color: '#333' }}>Tipo de Requerimento</th>
                  <th style={{ padding: '12px 8px', fontSize: '16px', color: '#333' }}>Data de Solicitação</th>
                  <th style={{ padding: '12px 8px', fontSize: '16px', color: '#333' }}>Situação</th>
                </tr>
              </thead>
              <tbody>
                {dadosTabela.map((req, index) => (
                  <tr key={index} style={{ borderBottom: '1px solid #e0e0e0' }}>
                    <td style={{ padding: '14px 8px', color: '#333', fontSize: '15px' }}>{req.tipo}</td>
                    <td style={{ padding: '14px 8px', color: '#333', fontSize: '15px' }}>{req.data}</td>
                    <td style={{ padding: '14px 8px', color: '#333', fontSize: '15px' }}>{req.situacao}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <Outlet />
        )}
      </div>

    </div>
  );
}