const express = require('express');
const Produto = require('../models/Produto');
const router = express.Router();

// Criar um novo produto
router.post('/', async (req, res) => {
  const { nome, descricao, contato, categoria, local } = req.body;
  try {
    const produto = new Produto({ nome, descricao, contato, categoria, local });
    await produto.save();
    res.status(201).json(produto);
  } catch (error) {
    res.status(400).json({ message: error.message });
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

// Atualizar um produto
router.put('/:id', async (req, res) => {
  try {
    const produto = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(produto);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Deletar um produto
router.delete('/:id', async (req, res) => {
  try {
    const produto = await Produto.findByIdAndDelete(req.params.id);
    res.json({ message: 'Produto deletado', produto });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
