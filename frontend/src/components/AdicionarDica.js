import React, { useState } from 'react';
import axios from 'axios';

const AdicionarDica = () => {
  const [novoNome, setNovoNome] = useState('');
  const [novaDescricao, setNovaDescricao] = useState('');
  const [novoLocal, setNovoLocal] = useState('');
  const [novoHorario, setNovoHorario] = useState('');
  const [novoContato, setNovoContato] = useState('');

  const adicionarDica = () => {
    const novaDica = {
      nome: novoNome,
      descricao: novaDescricao,
      local: novoLocal,
      horario: novoHorario,
      contato: novoContato
    };

    axios.post('http://localhost:3001/api/role', novaDica)
      .then(response => {
        // Limpa os campos do formulário
        setNovoNome('');
        setNovaDescricao('');
        setNovoLocal('');
        setNovoHorario('');
        setNovoContato('');
        
        // Alerta de sucesso
        alert('Dica adicionada com sucesso!');
      })
      .catch(error => {
        // Caso ocorra algum erro, mostre um alerta
        console.error('Erro ao adicionar dica:', error);
        alert('Houve um erro ao adicionar a dica. Tente novamente.');
      });
  };

  return (
    <div>
      <h3>Adicionar Nova Dica</h3>
      <form onSubmit={e => {
        e.preventDefault();  // Previne o envio tradicional do formulário
        adicionarDica();  // Chama a função de adicionar a dica
      }}>
        <input 
          type="text" 
          placeholder="Nome" 
          value={novoNome} 
          onChange={e => setNovoNome(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Descrição" 
          value={novaDescricao} 
          onChange={e => setNovaDescricao(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Local" 
          value={novoLocal} 
          onChange={e => setNovoLocal(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Horário" 
          value={novoHorario} 
          onChange={e => setNovoHorario(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Contato" 
          value={novoContato} 
          onChange={e => setNovoContato(e.target.value)} 
        />
        <button type="submit">Adicionar Dica</button>
      </form>
    </div>
  );
};

export default AdicionarDica;
