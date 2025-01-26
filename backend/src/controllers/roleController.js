const DicaRole = require('../models/DicaRole'); // Atualizando o nome do modelo

// Listar todas as dicas
exports.listarDicasRole = async (req, res) => {
  try {
    const dicas = await DicaRole.find();
    res.status(200).json(dicas);
  } catch (error) {
    res.status(500).json({ message: "Erro ao listar dicas", error });
  }
};

// Criar uma nova dica
exports.criarDicaRole = async (req, res) => {
  const { nome, descricao, local, horario, contato } = req.body;

  if (!nome || !descricao || !local || !horario || !contato) {
    return res.status(400).json({ message: "Todos os campos são obrigatórios." });
  }

  try {
    const novaDica = new DicaRole({ nome, descricao, local, horario, contato });
    await novaDica.save();
    res.status(201).json(novaDica);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar dica", error });
  }
};

module.exports = {
  listarDicasRole,
  criarDicaRole
};
