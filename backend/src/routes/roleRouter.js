const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const DicaRole = require('../models/DicaRole'); // Certifique-se de que o modelo esteja correto

// Criar uma nova dica de rolê
router.post('/', async (req, res) => {
  const { nome, descricao, local, horario, contato } = req.body;
  
  // Verifica se todos os campos obrigatórios estão presentes
  if (!nome || !descricao || !local || !horario || !contato) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  try {
    // Cria uma nova dica
    const dicaRole = new DicaRole({ nome, descricao, local, horario, contato });
    
    // Salva a nova dica no banco de dados
    await dicaRole.save();
    res.status(201).json(dicaRole);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao salvar a dica de rolê.', error: error.message });
  }
});

// Listar todas as dicas de rolê
router.get('/', async (req, res) => {
  try {
    const dicasRole = await DicaRole.find();
    res.json(dicasRole);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar as dicas.', error: error.message });
  }
});

// Buscar uma dica de rolê por ID
router.get('/:id', async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'ID inválido.' });
  }

  try {
    const dicaRole = await DicaRole.findById(req.params.id);
    if (!dicaRole) {
      return res.status(404).json({ message: 'Dica não encontrada' });
    }
    res.json(dicaRole);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar a dica.', error: error.message });
  }
});

// Deletar uma dica de rolê
router.delete('/:id', async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'ID inválido.' });
  }

  try {
    const dicaRole = await DicaRole.findByIdAndDelete(req.params.id);
    if (!dicaRole) {
      return res.status(404).json({ message: 'Dica não encontrada' });
    }
    res.json({ message: 'Dica deletada com sucesso.', dicaRole });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar a dica.', error: error.message });
  }
});

module.exports = router;
