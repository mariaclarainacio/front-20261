import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listarRequerimentos } from "../../services/requerimentoService";

export default function Requerimentos() {
  const [requerimentos, setRequerimentos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const buscarDados = async () => {
      try {
        const dados = await listarRequerimentos();
        setRequerimentos(dados);
      } catch (error) {
        console.error("Falha ao carregar a listagem:", error);
      } finally {
        setCarregando(false);
      }
    };

    buscarDados();
  }, []); 

  if (carregando) return <p>Carregando requerimentos...</p>;

  return (
    <div>
      <h1>Meus Requerimentos</h1>
      <Link to="/requerimentos/novo">Novo Requerimento</Link>
      
      <ul>
        {requerimentos.map((req) => (
          <li key={req.id}>
            <strong>{req.tipo}</strong> - {req.descricao} ({req.dataRequerimento})
          </li>
        ))}
      </ul>
    </div>
  );
}