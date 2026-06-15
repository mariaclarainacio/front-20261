import React from 'react';

const Card = ({ titulo, subtitulo, conteudo, corBorda, children }) => {
  const estiloCard = {
    borderLeft: `5px solid ${corBorda || '#ccc'}`,
    padding: '15px',
    margin: '10px 0',
    backgroundColor: '#f9f9f9',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  return (
    <div style={estiloCard}>
      {titulo && <h3 style={{ margin: 0, color: '#333' }}>{titulo}</h3>}
      {subtitulo && <p style={{ margin: '5px 0', color: '#666', fontSize: '0.9rem' }}>{subtitulo}</p>}
      
      <div style={{ marginTop: '10px' }}>
        {conteudo}
        {children}
      </div>
    </div>
  );
};

export default Card;