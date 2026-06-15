import React, { createContext, useState, useContext } from 'react';
import { login as apiLogin, logout as apiLogout } from '../services/authService';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(() => {
    const saved = localStorage.getItem('usuario');
    return saved ? JSON.parse(saved) : null;
  });
  const [token, setToken] = useState(() => localStorage.getItem('token'));

  const logar = async (email, senha) => {
    try {
      const dados = await apiLogin(email, senha);
      setUsuario(dados.usuario);
      setToken(dados.token);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const deslogar = () => {
    apiLogout();
    setUsuario(null);
    setToken(null);
  };

  const estaLogado = !!token;

  return (
    <AuthContext.Provider value={{ usuario, token, logar, deslogar, estaLogado }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}