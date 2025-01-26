const express = require('express');
const Servico = require('../models/Servico');
const router = express.Router();

// Criar um novo serviço
router.post('/', async (req, res) => {
  const { nome, descricao, prestador, contato, categoria, local } = req.body;
  try {
    const servico = new Servico({ nome, descricao, prestador, contato, categoria, local });
    await servico.save();
    res.status(201).json(servico);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Listar todos os serviços
router.get('/', async (req, res) => {
  try {
    const servicos = await Servico.find();
    res.json(servicos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Atualizar um serviço
router.put('/:id', async (req, res) => {
  try {
    const servico = await Servico.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(servico);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Deletar um serviço
router.delete('/:id', async (req, res) => {
  try {
    const servico = await Servico.findByIdAndDelete(req.params.id);
    res.json({ message: 'Serviço deletado', servico });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Procurar serviço por ID
router.get('/:id', async (req, res) => {
  try {
    const servico = await Servico.findById(req.params.id);
    if (!servico) {
      return res.status(404).json({ message: 'Serviço não encontrado' });
    }
    res.json(servico);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
