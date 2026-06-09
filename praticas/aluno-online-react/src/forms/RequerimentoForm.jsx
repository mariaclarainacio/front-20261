import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { cadastrarRequerimento } from '../../services/requerimentoService';

export default function RequerimentoForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  
  const dataAutomatica = new Date().toLocaleDateString('pt-BR');
  const onSubmit = async (data) => {
    try {
      const novoRequerimento = { ...data, dataRequerimento: dataAutomatica };
      await cadastrarRequerimento(novoRequerimento);
      
      alert("Requerimento cadastrado com sucesso!");
      navigate('/requerimentos');
    } catch (error) {
      alert("Erro ao salvar o requerimento na API. Verifique se o servidor está rodando.");
    }
  };

  return (
    <div style={{ maxWidth: '600px', marginTop: '10px' }}>
      <h2 style={{ fontSize: '26px', fontWeight: 'bold', color: '#000', marginBottom: '25px' }}>Novo Requerimento</h2>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="tipo" style={{ display: 'block', fontSize: '18px', color: '#000', marginBottom: '8px' }}>
            Tipo de Requerimento
          </label>
          <select
            id="tipo"
            {...register("tipo", { required: "Tipo é obrigatório" })}
            style={{ width: '100%', padding: '8px', fontSize: '16px', borderRadius: '4px', border: '1px solid #000', backgroundColor: '#fff' }}
          >
            <option value="">Selecione um tipo...</option>
            <option value="Revisão de Menção">Revisão de Menção</option>
            <option value="Dispensa de Disciplina">Dispensa de Disciplina</option>
            <option value="Trancamento de Matrícula">Trancamento de Matrícula</option>
            <option value="Mudança de Turno">Mudança de Turno</option>
            <option value="Renovação de Matrícula">Renovação de Matrícula</option>
          </select>
          {errors.tipo && (
            <p style={{ color: '#cc0000', fontSize: '14px', margin: '5px 0 0 0', fontWeight: '500' }}>
              {errors.tipo.message}
            </p>
          )}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="descricao" style={{ display: 'block', fontSize: '18px', color: '#000', marginBottom: '8px' }}>
            Descrição
          </label>
          <textarea
            id="descricao"
            {...register("descricao", { 
              required: "Descrição é obrigatória",
              minLength: { value: 10, message: "A descrição deve ter no mínimo 10 caracteres" }
            })}
            rows="5"
            style={{ width: '100%', padding: '8px', fontSize: '16px', borderRadius: '4px', border: '1px solid #000', fontFamily: 'Arial, sans-serif' }}
          />
          {errors.descricao && (
            <p style={{ color: '#cc0000', fontSize: '14px', margin: '5px 0 0 0', fontWeight: '500' }}>
              {errors.descricao.message}
            </p>
          )}
        </div>

        <div style={{ marginBottom: '30px' }}>
          <label htmlFor="dataRequerimento" style={{ display: 'block', fontSize: '18px', color: '#000', marginBottom: '8px' }}>
            Data do Requerimento
          </label>
          <input
            id="dataRequerimento"
            type="text"
            value={dataAutomatica}
            readOnly
            style={{ padding: '6px 12px', fontSize: '16px', borderRadius: '4px', border: '1px solid #000', backgroundColor: '#efefef', color: '#000', width: '160px', textAlign: 'center', cursor: 'not-allowed' }}
          />
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            type="button"
            onClick={() => navigate('/requerimentos')}
            style={{ padding: '6px 14px', fontSize: '16px', backgroundColor: '#efefef', color: '#000', border: '1px solid #767676', borderRadius: '4px', cursor: 'pointer' }}
          >
            Cancelar
          </button>
          <button 
            type="submit"
            style={{ padding: '6px 14px', fontSize: '16px', backgroundColor: '#efefef', color: '#000', border: '1px solid #767676', borderRadius: '4px', cursor: 'pointer' }}
          >
            Salvar
          </button>
        </div>

      </form>
    </div>
  );
}