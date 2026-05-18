import { createContext, useState, useContext } from 'react';
const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [autenticado, setAutenticado] = useState(false);
  const [usuario, setUsuario] = useState(null);

  const login = (dadosUsuario) => {
    setAutenticado(true);
    setUsuario(dadosUsuario);
  };

  const logout = () => {
    setAutenticado(false);
    setUsuario(null);
  };

  return (
    <AuthContext.Provider value={{ autenticado, usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};
