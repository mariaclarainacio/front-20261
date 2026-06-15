import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate('/dashboard');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', fontFamily: 'Arial, sans-serif', backgroundColor: '#fff' }}>
      <div style={{ width: '340px', border: '1px solid #e0e0e0', padding: '40px 30px', borderRadius: '8px', backgroundColor: '#fff' }}>
        <h2 style={{ fontSize: '26px', fontWeight: 'bold', color: '#000', marginBottom: '30px', textAlign: 'center' }}>Login - Aluno Online</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '15px', color: '#000', marginBottom: '8px', fontWeight: 'bold' }}>E-mail</label>
            <input
              type="text"
              placeholder="Ex: m@gmail.com"
              {...register("email", { 
                required: "E-mail é obrigatório", 
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Insira um e-mail válido"
                }
              })}
              style={{ width: '100%', padding: '8px 12px', fontSize: '16px', borderRadius: '4px', border: '1px solid #767676', boxSizing: 'border-box' }}
            />
            {errors.email && <p style={{ color: '#cc0000', fontSize: '14px', margin: '6px 0 0 0', fontWeight: '500' }}>{errors.email.message}</p>}
          </div>
          <div style={{ marginBottom: '30px' }}>
            <label style={{ display: 'block', fontSize: '15px', color: '#000', marginBottom: '8px', fontWeight: 'bold' }}>Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              {...register("password", { required: "Senha é obrigatória" })}
              style={{ width: '100%', padding: '8px 12px', fontSize: '16px', borderRadius: '4px', border: '1px solid #767676', boxSizing: 'border-box' }}
            />
            {errors.password && <p style={{ color: '#cc0000', fontSize: '14px', margin: '6px 0 0 0', fontWeight: '500' }}>{errors.password.message}</p>}
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', fontSize: '16px', backgroundColor: '#efefef', color: '#000', border: '1px solid #767676', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Entrar</button>
        </form>
      </div>
    </div>
  );
}