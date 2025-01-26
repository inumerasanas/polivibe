import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home'; // Certifique-se de que essa página existe
import Produtos from './pages/Produtos';
import Servicos from './pages/Servicos';
import DicasRole from './components/DicasRole'; // Importar DicasRole
import AdicionarDica from './components/AdicionarDica'; // Importar AdicionarDica

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/dicas" element={<DicasRole />} /> {/* Rota para Dicas */}
          <Route path="/adicionar-dica" element={<AdicionarDica />} /> {/* Rota para Adicionar Nova Dica */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
