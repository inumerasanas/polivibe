import React, { useState, useEffect } from 'react';
import { getServicos } from '../services/api';

const Servicos = () => {
  const [servicos, setServicos] = useState([]);
  const [loading, setLoading] = useState(true);  // Para controlar o carregamento

  useEffect(() => {
    const fetchServicos = async () => {
      const data = await getServicos(); // Chama a função getServicos
      console.log(data); // Verifique a resposta dos serviços no console
      setServicos(data); // Atualiza o estado com os serviços
      setLoading(false); // Marca o carregamento como finalizado
    };

    fetchServicos();
  }, []);  // O array vazio significa que essa função será chamada apenas uma vez, quando o componente for montado.

  // Renderiza um "Carregando..." enquanto os dados não chegam
  if (loading) {
    return <div>Carregando...</div>;
  }

  // Caso contrário, renderiza os serviços
  return (
    <div>
      <h1>Serviços</h1>
      {servicos.length === 0 ? (
        <p>Nenhum serviço encontrado</p>
      ) : (
        <ul>
          {servicos.map((servico) => (
            <li key={servico._id}>
              <h3>{servico.nome}</h3>
              <p>{servico.descricao}</p>
              <p><strong>Prestador:</strong> {servico.prestador}</p>
              <p><strong>Contato:</strong> {servico.contato}</p>
              <p><strong>Categoria:</strong> {servico.categoria}</p>
              <p><strong>local:</strong> {servico.local}</p>

            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Servicos;
