import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Páginas
import NotFound from './pages/404';
import Home from './pages/Home';
import Pacotes from './pages/Pacotes';
import Pacote from './pages/Pacote';
import Pesquisa from './pages/Pesquisa';
import Cadastro from './pages/Cadastro';
import CategoriaAdd from './pages/CategoriaAdd';
import CategoriaEdit from './pages/CategoriaEdit';
import Perfil from './pages/Perfil';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/categoria/add" element={<CategoriaAdd />} />
      <Route path="/categoria/:id/edit" element={<CategoriaEdit />} />
      <Route path="/pesquisa" element={<Pesquisa />} />
      <Route path="/pacotes" element={<Pacotes />} />
      <Route path="/pacotes/:id" element={<Pacote />} />
      <Route path="/sobre" element={<h1>teste</h1>} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
  rootElement,
);
