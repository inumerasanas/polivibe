const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Produto = require('../models/Produto');

// Criar um novo produto
router.post('/', async (req, res) => {
  const { nome, descricao, contato, categoria, local } = req.body;
  if (!nome || !descricao || !contato || !categoria || !local) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  try {
    const produto = new Produto({ nome, descricao, contato, categoria, local });
    await produto.save();
    res.status(201).json(produto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Listar todos os produtos
router.get('/', async (req, res) => {
  try {
    const produtos = await Produto.find();
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Buscar um produto por ID
router.get('/:id', async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'ID inválido.' });
  }

  try {
    const produto = await Produto.findById(req.params.id);
    if (!produto) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
    res.json(produto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Atualizar um produto
router.put('/:id', async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'ID inválido.' });
  }

  try {
    const produto = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!produto) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
    res.json(produto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Deletar um produto
router.delete('/:id', async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'ID inválido.' });
  }

  try {
    const produto = await Produto.findByIdAndDelete(req.params.id);
    if (!produto) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
    res.json({ message: 'Produto deletado', produto });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
