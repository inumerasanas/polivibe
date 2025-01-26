import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';  // Importe o componente Navbar
import Produtos from './pages/Produtos';  // Importe as páginas de Produtos
import Servicos from './pages/Servicos';  // Importe as páginas de Serviços

function App() {
  return (
    <Router>
      <Navbar />  {/* Exibe a barra de navegação */}
      <Routes>
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/servicos" element={<Servicos />} />
        {/* Adicione outras rotas aqui */}
      </Routes>
    </Router>
  );
}

export default App;
