// src/models/DicaRole.js
const mongoose = require('mongoose');

// Definindo o esquema para as dicas de rolê
const DicaRoleSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
  local: {
    type: String,
    required: true
  },
  horario: {
    type: String,
    required: true
  },
  contato: {
    type: String,
    required: true
  }
});

const DicaRole = mongoose.model('DicaRole', DicaRoleSchema); // Criando o modelo DicaRole
module.exports = DicaRole;
