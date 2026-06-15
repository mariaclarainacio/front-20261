import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();
  const { logar } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErro('');
    
    if (!email || !senha) {
      setErro('Preencha todos os campos');
      return;
    }

    const sucesso = await logar(email, senha);
    
    if (sucesso) {
      navigate('/dashboard');
    } else {
      setErro('E-mail ou senha incorretos');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#fff', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ width: '100%', maxWidth: '400px', padding: '40px', border: '1px solid #e0e0e0', borderRadius: '8px', backgroundColor: '#fff' }}>
        <h2 style={{ textAlign: 'center', fontSize: '28px', fontWeight: 'bold', color: '#000', marginBottom: '30px' }}>Login - Aluno Online</h2>
        
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '16px', fontWeight: 'bold', color: '#000', marginBottom: '8px' }}>E-mail</label>
            <input 
              type="email" 
              placeholder="Ex: m@gmail.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '10px', fontSize: '15px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label style={{ display: 'block', fontSize: '16px', fontWeight: 'bold', color: '#000', marginBottom: '8px' }}>Senha</label>
            <input 
              type="password" 
              placeholder="Digite sua senha" 
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              style={{ width: '100%', padding: '10px', fontSize: '15px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }}
            />
          </div>

          {erro && (
            <p style={{ color: '#cc0000', fontSize: '14px', margin: '0 0 20px 0', textAlign: 'center', fontWeight: '500' }}>
              {erro}
            </p>
          )}

          <button 
            type="submit" 
            style={{ width: '100%', padding: '12px', fontSize: '16px', backgroundColor: '#fff', color: '#000', border: '1px solid #000', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}