const BASE_URL = "http://localhost:3000/usuarios";

export const loginUsuario = async (email, senha) => {
  try {
    const response = await fetch(`${BASE_URL}?email=${email}`);
    if (!response.ok) {
      throw new Error("Erro na conexão com o servidor de autenticação");
    }
    
    const usuariosFiltrados = await response.json();
    if (usuariosFiltrados.length > 0 && usuariosFiltrados[0].senha === senha) {
      const usuario = usuariosFiltrados[0];
      const tokenFake = btoa(JSON.stringify({ id: usuario.id, email: usuario.email }));
      
      return {
        usuario: { id: usuario.id, email: usuario.email },
        token: tokenFake
      };
    } else {
      throw new Error("E-mail ou senha incorretos");
    }
  } catch (error) {
    console.error("Erro no serviço de login:", error);
    throw error;
  }
};