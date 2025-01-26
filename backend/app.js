const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const produtoRoutes = require('./src/routes/produtoRoutes');
const servicoRoutes = require('./src/routes/servicoRoutes');
const roleRoutes = require('./src/routes/roleRouter');

const app = express();

// Middleware para JSON
app.use(express.json());

// Habilitar CORS
app.use(cors());

// Conexão com o MongoDB usando async/await
const DB_URI = 'mongodb://localhost:27017/polivibe';

async function conectarBanco() {
  try {
    await mongoose.connect(DB_URI);
    console.log('Conectado ao MongoDB');
  } catch (err) {
    console.error('Erro ao conectar ao MongoDB:', err);
    process.exit(1); // Encerra o processo se falhar a conexão
  }
}

// Chama a função de conexão
conectarBanco();

// Rotas
app.use('/api/produtos', produtoRoutes);
app.use('/api/servicos', servicoRoutes);
app.use('/api/role', roleRoutes);

// Middleware para capturar erros não tratados
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Ocorreu um erro no servidor', error: err.message });
});

module.exports = app; // Exporta o app configurado
