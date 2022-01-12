import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Páginas
import NotFound from './pages/404';
import Home from './pages/Home';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<h1>teste</h1>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
  rootElement,
);
