import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';  // Importando Link

const DicasRole = () => {
  const [dicas, setDicas] = useState([]);

  // Carregar as dicas ao montar o componente
  useEffect(() => {
    axios.get('http://localhost:3001/api/role')
      .then(response => setDicas(response.data))
      .catch(error => console.error('Erro ao carregar dicas:', error));
  }, []);

  return (
    <div>
      <h2>Dicas de Rolê</h2>
      <ul>
        {dicas.map(dica => (
          <li key={dica._id}>
            <h3>{dica.nome}</h3>
            <p>{dica.descricao}</p>
            <p>{dica.local}</p>
            <p>{dica.horario}</p>
            <p>{dica.contato}</p>
          </li>
        ))}
      </ul>

      {/* Link para a página de adicionar dica */}
      <Link to="/adicionar-dica">Adicionar Nova Dica</Link>
    </div>
  );
};

export default DicasRole;
