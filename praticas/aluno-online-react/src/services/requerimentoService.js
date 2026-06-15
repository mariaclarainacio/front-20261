function obterTokenValido() {
  const token = localStorage.getItem('token');
  if (!token) {
    localStorage.removeItem('usuario');
    localStorage.removeItem('token');
    throw new Error('401');
  }
  return token;
}

export async function listarRequerimentos() {
  try {
    const token = obterTokenValido();
    const hostname = window.location.hostname;
    const response = await fetch(`http://${hostname}:3000/requerimentos`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    if (response.status === 401) {
      localStorage.removeItem('usuario');
      localStorage.removeItem('token');
      throw new Error('401');
    }
    if (!response.ok) {
      throw new Error('Erro ao buscar requerimentos');
    }
    return await response.json();
  } catch (error) {
    if (error.message === '401') {
      window.location.href = '/';
    }
    throw error;
  }
}

export async function cadastrarRequerimento(requerimento) {
  try {
    const token = obterTokenValido();
    const hostname = window.location.hostname;
    const response = await fetch(`http://${hostname}:3000/requerimentos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(requerimento)
    });
    if (response.status === 401) {
      localStorage.removeItem('usuario');
      localStorage.removeItem('token');
      throw new Error('401');
    }
    if (!response.ok) {
      throw new Error('Erro ao cadastrar requerimento');
    }
    return await response.json();
  } catch (error) {
    if (error.message === '401') {
      window.location.href = '/';
    }
    throw error;
  }
}