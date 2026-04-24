import { useState } from 'react';
import Input from '../components/Input/Input'; 
import './Login.css';
import capeloIcon from '../assets/learn.svg';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', senha: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.email) {
      tempErrors.email = "O campo de email é obrigatório.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "E-mail inválido"; 
    }

    if (!formData.senha) {
      tempErrors.senha = "O campo de senha é obrigatório.";
    } else if (formData.senha.length < 6) {
      tempErrors.senha = "A senha deve ter no mínimo 6 caracteres"; 
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Dados prontos para envio:", formData);
      alert("Login realizado com sucesso (simulação)!");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <div className="login-header">
          <img src={capeloIcon} alt="Ícone Capelo" className="capelo-icon" />
          <h2>Aluno Online</h2>
        </div>
        <form onSubmit={handleSubmit} noValidate>
          <Input 
            label="E-mail"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <Input 
            label="Senha"
            type="password"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            error={errors.senha}
          />
          <button type="submit" className="btn-entrar">Entrar</button>
        </form>
      </div>
      <footer className="login-footer">
        © 2026. Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default Login;