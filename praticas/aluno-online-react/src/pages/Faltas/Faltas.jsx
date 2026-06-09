import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Faltas() {
  const navigate = useNavigate();

  const historicoFaltas = [
    {
      periodo: '2026.1',
      disciplinas: [
        { nome: 'BI e Data Warehousing', total: '0', presenca: '100%' },
        { nome: 'Construção de Frontend', total: '0', presenca: '100%' },
        { nome: 'Manutenção de Software e Devops', total: '0', presenca: '100%' }
      ]
    },
    {
      periodo: '2025.2',
      disciplinas: [
        { nome: 'Construção de Backend', total: '27', presenca: '87.5%' },
        { nome: 'Estrutura de Dados', total: '9', presenca: '85%' },
        { nome: 'Gerenciamento de Projetos', total: '10.5', presenca: '82.5%' }
      ]
    },
    {
      periodo: '2025.1',
      disciplinas: [
        { nome: 'Análise e Modelagem de Sistemas', total: '4', presenca: '94.5%' },
        { nome: 'Algoritmos e Programação', total: '2', presenca: '97.2%' },
        { nome: 'Fundamentos de Banco de Dados', total: '0', presenca: '100%' }
      ]
    }
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
              style={{ padding: '12px 15px', color: item === 'Faltas' ? '#000' : '#666', fontWeight: item === 'Faltas' ? 'bold' : 'normal', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}
              onClick={() => navegarPara(item)}
            >
              <span style={{ fontSize: '8px' }}>●</span> {item}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ flex: 1, padding: '40px 60px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <h1 style={{ margin: 0, fontSize: '32px', fontWeight: 'bold', color: '#000' }}>Minhas Faltas</h1>
          <div style={{ width: '45px', height: '45px', backgroundColor: '#e0e0e0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>👤</div>
        </div>
        <h3 style={{ fontSize: '20px', fontWeight: '500', color: '#555', marginTop: '0', marginBottom: '40px' }}>Histórico de Faltas por Semestre</h3>
        {historicoFaltas.map((semestre) => (
          <div key={semestre.periodo} style={{ marginBottom: '45px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#000', marginBottom: '15px' }}>{semestre.periodo}</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #ccc', textAlign: 'left' }}>
                  <th style={{ padding: '8px 0', fontSize: '15px', color: '#555', width: '50%' }}>Disciplina</th>
                  <th style={{ padding: '8px 0', fontSize: '15px', color: '#555', textAlign: 'center', width: '25%' }}>Total de Faltas</th>
                  <th style={{ padding: '8px 0', fontSize: '15px', color: '#555', textAlign: 'center', width: '25%' }}>% de Presença</th>
                </tr>
              </thead>
              <tbody>
                {semestre.disciplinas.map((disc, dIdx) => (
                  <tr key={dIdx} style={{ borderBottom: '1px solid #f0f0f0' }}>
                    <td style={{ padding: '14px 0', color: '#333', fontSize: '15px' }}>{disc.nome}</td>
                    <td style={{ padding: '14px 0', color: '#333', fontSize: '15px', textAlign: 'center' }}>{disc.total}</td>
                    <td style={{ padding: '14px 0', color: '#333', fontSize: '15px', textAlign: 'center' }}>{disc.presenca}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}