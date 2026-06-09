import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [autenticado, setAutenticado] = useState(false);
  const [usuario, setUsuario] = useState(null);
  const [carregando, setCarregando] = useState(true);
  useEffect(() => {
    const tokenSalvo = localStorage.getItem("token");
    const usuarioSalvo = localStorage.getItem("usuario");

    if (tokenSalvo && usuarioSalvo) {
      setAutenticado(true);
      setUsuario(JSON.parse(usuarioSalvo));
    }
    setCarregando(false);
  }, []);

  const login = (dadosUsuario, token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("usuario", JSON.stringify(dadosUsuario));
    
    setAutenticado(true);
    setUsuario(dadosUsuario);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    
    setAutenticado(false);
    setUsuario(null);
  };

  if (carregando) {
    return <div>Carregando sessão...</div>;
  }

  return (
    <AuthContext.Provider value={{ autenticado, usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};