import React, { useState, useEffect } from 'react';
import { getProdutos } from '../services/api';

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);  // Armazena os produtos recebidos
  const [loading, setLoading] = useState(true);  // Controle de carregamento
  const [erro, setErro] = useState(null);  // Armazena mensagens de erro

  useEffect(() => {
    // Função assíncrona para buscar os produtos
    const fetchProdutos = async () => {
      try {
        const data = await getProdutos();  // Chama a função getProdutos para buscar os produtos
        if (data.length === 0) {
          setErro('Nenhum produto encontrado');  // Caso não haja produtos, exibe mensagem
        }
        setProdutos(data);  // Atualiza o estado com os produtos recebidos
      } catch (err) {
        setErro('Erro ao carregar produtos');  // Caso haja erro, exibe mensagem de erro
      } finally {
        setLoading(false);  // Finaliza o carregamento independentemente de sucesso ou erro
      }
    };

    fetchProdutos();  // Chama a função para buscar os produtos
  }, []);  // O array vazio significa que essa função será chamada apenas uma vez, quando o componente for montado.

  // Exibe "Carregando..." enquanto os dados estão sendo carregados
  if (loading) {
    return <div>Carregando...</div>;
  }

  // Exibe uma mensagem de erro caso algo tenha dado errado
  if (erro) {
    return <div>{erro}</div>;
  }

  // Caso contrário, renderiza os produtos
  return (
    <div>
      <h1>Produtos</h1>
      {produtos.length === 0 ? (
        <p>Nenhum serviço encontrado</p>
      ) : (
        <ul>
          {produtos.map((servico) => (
            <li key={servico._id}>
              <h3>{servico.nome}</h3>
              <p>{servico.descricao}</p>
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

export default Produtos;
