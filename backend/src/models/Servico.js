const mongoose = require('mongoose');
const express = require('express'); 
const app = express();
const servicoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
  prestador: {
    type: String,
    required: true
  },
  contato: {
    type: String,
    required: true
  },
  categoria: {
    type: String,
    required: true
  },
  local: {
    type: String,
    required: true  // O campo 'local' também será obrigatório aqui
  }
});

module.exports = mongoose.model('Servico', servicoSchema);
