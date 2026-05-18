import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && senha.trim()) {
      login({ email, nome: 'Estudante Online' });
      navigate('/');
    }
  };

  return (
    <div className="login-container" style={{ padding: '2rem', maxWidth: '400px', margin: '0 auto' }}>
      <form onSubmit={handleSubmit}>
        <h2>Login - Aluno Online</h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>E-mail:</label>
          <input 
            id="email"
            type="email" 
            placeholder="Digite seu e-mail" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="senha" style={{ display: 'block', marginBottom: '0.5rem' }}>Senha:</label>
          <input 
            id="senha"
            type="password" 
            placeholder="Digite sua senha" 
            value={senha} 
            onChange={(e) => setSenha(e.target.value)} 
            required 
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>

        <button type="submit" style={{ width: '100%', padding: '0.75rem', cursor: 'pointer' }}>
          Entrar
        </button>
      </form>
    </div>
  );
}
