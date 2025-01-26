import axios from 'axios';

// Defina a URL do seu backend
const API_URL = 'http://localhost:3001/api'; // Substitua pela URL da sua API

// Função para buscar produtos
export const getProdutos = async () => {
  try {
    const response = await axios.get(`${API_URL}/produtos`); // Alterar conforme sua API
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return []; // Retorna um array vazio em caso de erro
  }
};

// Função para buscar serviços
export const getServicos = async () => {
  try {
    const response = await axios.get(`${API_URL}/servicos`); // Alterar conforme sua API
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar serviços:', error);
    return []; // Retorna um array vazio em caso de erro
  }
};
