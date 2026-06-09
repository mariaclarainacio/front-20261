const BASE_URL = "http://localhost:3000/requerimentos";
const verificarAutenticacao = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    const erro401 = new Error("Unauthorized");
    erro401.status = 401;
    throw erro401;
  }
  return token;
};

export const listarRequerimentos = async () => {
  try {
    const token = verificarAutenticacao();

    const response = await fetch(BASE_URL, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    if (!response.ok) throw new Error("Erro ao buscar requerimentos");
    return await response.json();
  } catch (error) {
    console.error("Erro em listarRequerimentos:", error);
    if (error.status === 401) {
      localStorage.clear();
      window.location.reload(); 
    }
    throw error;
  }
};

export const cadastrarRequerimento = async (novoRequerimento) => {
  try {
    const token = verificarAutenticacao();

    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(novoRequerimento),
    });

    if (!response.ok) throw new Error("Erro ao cadastrar requerimento");
    return await response.json();
  } catch (error) {
    console.error("Erro em cadastrarRequerimento:", error);
    if (error.status === 401) {
      localStorage.clear();
      window.location.reload();
    }
    throw error;
  }
};