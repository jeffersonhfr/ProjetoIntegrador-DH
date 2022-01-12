import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Páginas
import NotFound from './pages/404';
import Home from './pages/Home';
import Pacotes from './pages/Pacotes';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pacotes" element={<Pacotes />} />
      <Route path="/sobre" element={<h1>teste</h1>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
  rootElement,
);
