const app = require('./app'); // Importa o app configurado no app.js

const PORT = 3001;

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
