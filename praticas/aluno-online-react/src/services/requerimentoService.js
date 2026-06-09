const BASE_URL = "http://localhost:3000/requerimentos";

export const listarRequerimentos = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error("Erro ao buscar requerimentos");
    }
    return await response.json();
  } catch (error) {
    console.error("Erro no serviço listarRequerimentos:", error);
    throw error;
  }
};

export const cadastrarRequerimento = async (novoRequerimento) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novoRequerimento),
    });

    if (!response.ok) {
      throw new Error("Erro ao cadastrar requerimento");
    }
    return await response.json();
  } catch (error) {
    console.error("Erro no serviço cadastrarRequerimento:", error);
    throw error;
  }
};