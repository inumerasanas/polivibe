const mongoose = require('mongoose');
const express = require('express'); 
const app = express();

const produtoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  descricao: {
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
    required: true  // O campo local continua sendo obrigatório
  }
});

module.exports = mongoose.model('Produto', produtoSchema);
