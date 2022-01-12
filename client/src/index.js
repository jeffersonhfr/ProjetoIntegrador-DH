import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Páginas
import NotFound from './pages/404';
import Home from './pages/Home';
import Pacotes from './pages/Pacotes';
import Pacote from './pages/Pacote';
import Pesquisa from './pages/Pesquisa';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pesquisa" element={<Pesquisa />} />
      <Route path="/pacotes" element={<Pacotes />} />
      <Route path="/pacotes/:id" element={<Pacote />} />
      <Route path="/sobre" element={<h1>teste</h1>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
  rootElement,
);
