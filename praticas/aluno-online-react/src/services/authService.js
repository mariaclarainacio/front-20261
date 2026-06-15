export async function login(email, senha) {
    const hostname = window.location.hostname;
    const response = await fetch(`http://${hostname}:3000/usuarios`);
    if (!response.ok) {
      throw new Error('Erro ao conectar ao servidor');
    }
    const usuarios = await response.json();
    const usuario = usuarios.find(u => u.email === email && u.senha === senha);
    
    if (!usuario) {
      throw new Error('401');
    }
    
    const mockToken = btoa(JSON.stringify({ id: usuario.id, email: usuario.email, exp: Date.now() + 3600000 }));
    localStorage.setItem('usuario', JSON.stringify(usuario));
    localStorage.setItem('token', mockToken);
    return { usuario, token: mockToken };
  }
  
  export function logout() {
    localStorage.removeItem('usuario');
    localStorage.removeItem('token');
  }