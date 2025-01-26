const Servico = require('../models/Servico');

// Controller para obter todos os serviços
exports.getAllServicos = async (req, res) => {
  try {
    const servicos = await Servico.find();
    res.status(200).json(servicos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter serviços', error });
  }
};

// Controller para obter um serviço por ID
exports.getServicoById = async (req, res) => {
  try {
    const servico = await Servico.findById(req.params.id);
    if (!servico) {
      return res.status(404).json({ message: 'Serviço não encontrado' });
    }
    res.status(200).json(servico);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter serviço', error });
  }
};

// Controller para criar um novo serviço
exports.createServico = async (req, res) => {
  // Verificando se todos os campos necessários foram fornecidos
  const { nome, descricao, prestador, contato, categoria, local } = req.body;

  if (!nome || !descricao || !prestador || !contato || !categoria || !local) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
  }

  const novoServico = new Servico({
    nome,
    descricao,
    prestador,
    contato,
    categoria,
    local
  });

  try {
    // Salvando o novo serviço no banco de dados
    const servico = await novoServico.save();
    res.status(201).json(servico);  // Retorna o serviço criado com o status 201
  } catch (error) {
    console.error('Erro ao criar serviço:', error);
    res.status(500).json({ message: 'Erro ao criar serviço', error });
  }
};

// Controller para atualizar um serviço
exports.updateServico = async (req, res) => {
  try {
    const servico = await Servico.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!servico) {
      return res.status(404).json({ message: 'Serviço não encontrado' });
    }
    res.status(200).json(servico);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar serviço', error });
  }
};

// Controller para deletar um serviço
exports.deleteServico = async (req, res) => {
  try {
    const servico = await Servico.findByIdAndDelete(req.params.id);
    if (!servico) {
      return res.status(404).json({ message: 'Serviço não encontrado' });
    }
    res.status(200).json({ message: 'Serviço deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar serviço', error });
  }
};
