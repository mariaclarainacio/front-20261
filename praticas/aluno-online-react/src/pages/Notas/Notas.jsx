import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Notas() {
  const navigate = useNavigate();

  const historicoSemestres = [
    {
      periodo: '2026.1',
      disciplinas: [
        { nome: 'BI e Data Warehousing', a1: '', a2: '', a3: '', mencao: 'SR' },
        { nome: 'Construção de Frontend', a1: '', a2: '', a3: '', mencao: 'SR' },
        { nome: 'Manutenção de Software e Devops', a1: '', a2: '', a3: '', mencao: 'SR' }
      ]
    },
    {
      periodo: '2025.2',
      disciplinas: [
        { nome: 'Construção de Backend', a1: '5.4', a2: '6.2', a3: '', mencao: 'MM' },
        { nome: 'Estrutura de Dados', a1: '6.3', a2: '6.1', a3: '', mencao: 'MM' },
        { nome: 'Gerenciamento de Projetos', a1: '7.4', a2: '7.1', a3: '', mencao: 'MS' }
      ]
    },
    {
      periodo: '2025.1',
      disciplinas: [
        { nome: 'Análise e Modelagem de Sistemas', a1: '8.5', a2: '8.0', a3: '', mencao: 'MS' },
        { nome: 'Algoritmos e Programação', a1: '9.0', a2: '9.5', a3: '', mencao: 'SS' },
        { nome: 'Fundamentos de Banco de Dados', a1: '7.0', a2: '7.8', a3: '', mencao: 'MS' }
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
              style={{ padding: '12px 15px', color: item === 'Notas' ? '#000' : '#666', fontWeight: item === 'Notas' ? 'bold' : 'normal', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}
              onClick={() => navegarPara(item)}
            >
              <span style={{ fontSize: '8px' }}>●</span> {item}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ flex: 1, padding: '40px 60px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <h1 style={{ margin: 0, fontSize: '32px', fontWeight: 'bold', color: '#000' }}>Minhas Notas</h1>
          <div style={{ width: '45px', height: '45px', backgroundColor: '#e0e0e0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>👤</div>
        </div>
        <h3 style={{ fontSize: '20px', fontWeight: '500', color: '#555', marginTop: '0', marginBottom: '40px' }}>Histórico de Notas por Semestre</h3>
        {historicoSemestres.map((semestre) => (
          <div key={semestre.periodo} style={{ marginBottom: '45px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#000', marginBottom: '15px' }}>{semestre.periodo}</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #ccc', textAlign: 'left' }}>
                  <th style={{ padding: '8px 0', fontSize: '15px', color: '#555', width: '50%' }}>Disciplina</th>
                  <th style={{ padding: '8px 0', fontSize: '15px', color: '#555', textAlign: 'center', width: '10%' }}>A1</th>
                  <th style={{ padding: '8px 0', fontSize: '15px', color: '#555', textAlign: 'center', width: '10%' }}>A2</th>
                  <th style={{ padding: '8px 0', fontSize: '15px', color: '#555', textAlign: 'center', width: '10%' }}>A3</th>
                  <th style={{ padding: '8px 0', fontSize: '15px', color: '#555', textAlign: 'center', width: '20%' }}>Menção</th>
                </tr>
              </thead>
              <tbody>
                {semestre.disciplinas.map((disc, dIdx) => (
                  <tr key={dIdx} style={{ borderBottom: '1px solid #f0f0f0' }}>
                    <td style={{ padding: '14px 0', color: '#333', fontSize: '15px' }}>{disc.nome}</td>
                    <td style={{ padding: '14px 0', color: '#333', fontSize: '15px', textAlign: 'center' }}>{disc.a1 || '-'}</td>
                    <td style={{ padding: '14px 0', color: '#333', fontSize: '15px', textAlign: 'center' }}>{disc.a2 || '-'}</td>
                    <td style={{ padding: '14px 0', color: '#333', fontSize: '15px', textAlign: 'center' }}>{disc.a3 || '-'}</td>
                    <td style={{ padding: '14px 0', color: '#333', fontSize: '15px', textAlign: 'center', fontWeight: 'bold' }}>{disc.mencao}</td>
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