const BASE_URL = 'http://localhost:3000/requerimentos';

export async function listarRequerimentos() {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error('Erro ao buscar requerimentos');
  }
  return await response.json();
}

export async function cadastrarRequerimento(requerimento) {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requerimento)
  });
  if (!response.ok) {
    throw new Error('Erro ao cadastrar requerimento');
  }
  return await response.json();
}