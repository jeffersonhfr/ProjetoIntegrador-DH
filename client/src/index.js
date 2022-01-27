import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Páginas
import NotFound from "./pages/404";
import Home from "./pages/Home";
import Pacotes from "./pages/Pacotes";
import Pacote from "./pages/Pacote";
import Pesquisa from "./pages/Pesquisa";
import Cadastro from "./pages/Cadastro";
import CategoriaAdd from "./pages/CategoriaAdd";
import CategoriaEdit from "./pages/CategoriaEdit";
import Perfil from "./pages/Perfil";
import PerfilEdit from "./pages/PerfilEdit";
import Sobre from "./pages/Sobre";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Ajuda from "./pages/Ajuda";
import AjudaEdit from "./pages/AjudaEdit";
import CheckoutSucesso from "./pages/CheckoutSucesso";
import Checkout from "./pages/Checkout";
import ListarUsuarios from "./pages/ListarUsuarios";
import VisualizarUsuario from "./pages/VisualizarUsuario";
import RecuperarSenha from "./pages/RecuperarSenha";
//Para teste
import users from "./users";
import Login from "./pages/Login";
import PacoteEdit from "./pages/PacoteEdit";

const usuarioLogado = users[0];

const rootElement = document.getElementById("root");

render(
  <>
    <Header user={usuarioLogado} />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home user={usuarioLogado} />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/categoria/add" element={<CategoriaAdd />} />
        <Route path="/categoria/:id/edit" element={<CategoriaEdit />} />
        <Route path="/pesquisa" element={<Pesquisa />} />
        <Route path="/pacotes" element={<Pacotes />} />
        <Route path="/pacotes/:id" element={<Pacote />} />
        <Route path="/pacotes/:id/edit" element={<PacoteEdit />} />
        <Route path="/sobre" element={<Sobre user={usuarioLogado} />} />
        <Route path="/perfil" element={<Perfil user={usuarioLogado} />} />
        <Route
          path="/perfil/edit"
          element={<PerfilEdit user={usuarioLogado} />}
        />
        <Route path="/ajuda" element={<Ajuda user={usuarioLogado} />} />
        <Route path="/ajuda/edit" element={<AjudaEdit />} />
        <Route path="/login" element={<Login erro={null} />} />
        <Route path="/checkoutSucesso" element={<CheckoutSucesso />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/listarUsuarios" element={<ListarUsuarios />} />
        <Route path="/RecuperarSenha" element={<RecuperarSenha />} />
        <Route path="/VisualizarUsuario/:id" element={<VisualizarUsuario />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </>,
  rootElement
);
