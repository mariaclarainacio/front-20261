import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

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
                color: item === 'Dashboard' ? '#000' : '#666',
                fontWeight: item === 'Dashboard' ? 'bold' : 'normal',
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
        <h1 style={{ margin: 0, fontSize: '36px', fontWeight: 'bold', color: '#000' }}>Olá, Aluno!</h1>
        <p style={{ fontSize: '20px', color: '#333', marginTop: '5px', marginBottom: '40px', fontWeight: '500' }}>
          Bem-vindo ao portal do student
        </p>

        <div style={{ marginBottom: '35px' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#000', marginBottom: '15px', borderBottom: '1px solid #e0e0e0', paddingBottom: '5px' }}>
            Mural de Avisos
          </h3>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, fontSize: '16px', color: '#333', lineHeight: '2' }}>
            <li>Inscrição para o projeto de extensão</li>
            <li>Eleição para representante de turma</li>
          </ul>
        </div>

        <div style={{ marginBottom: '35px' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#000', marginBottom: '15px', borderBottom: '1px solid #e0e0e0', paddingBottom: '5px' }}>
            Calendário Académico
          </h3>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, fontSize: '16px', color: '#333', lineHeight: '2' }}>
            <li>23/02 - Início do período letivo 2026-1</li>
            <li>25/04 - Prazo final para aplicação da P1</li>
            <li>23/06 - Prazo final para aplicação da P2</li>
            <li>04/07 - Fim do período letivo 2026-1</li>
          </ul>
        </div>

        <div>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#000', marginBottom: '15px', borderBottom: '1px solid #e0e0e0', paddingBottom: '5px' }}>
            Minhas Disciplinas
          </h3>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, fontSize: '16px', color: '#333', lineHeight: '2' }}>
            <li>BI e Data Warehousing</li>
            <li>Construção de Frontend</li>
            <li>Manutenção de Software e Devops</li>
            <li>Construção de Backend</li>
            <li>Estrutura de Dados</li>
            <li>Gerenciamento de Projetos</li>
            <li>Análise e Modelagem de Sistemas</li>
            <li>Algoritmos e Programação</li>
            <li>Fundamentos de Banco de Dados</li>
          </ul>
        </div>
      </div>

    </div>
  );
}