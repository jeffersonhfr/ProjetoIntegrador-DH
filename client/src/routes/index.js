import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes as RoutesDOM,
  Route,
  Navigate,
} from 'react-router-dom';
import auth from '../storage/auth';
import userStorage from '../storage/user';

// Páginas
import Header from '../components/Header';
import Footer from '../components/Footer';
import NotFound from '../pages/404';
import Home from '../pages/Home';
import Pacotes from '../pages/Pacotes';
import Pacote from '../pages/Pacote';
import Pesquisa from '../pages/Pesquisa';
import Cadastro from '../pages/Cadastro';
import CategoriaAdd from '../pages/CategoriaAdd';
import CategoriaEdit from '../pages/CategoriaEdit';
import Perfil from '../pages/Perfil';
import PerfilEdit from '../pages/PerfilEdit';
import Sobre from '../pages/Sobre';
import Ajuda from '../pages/Ajuda';
import AjudaEdit from '../pages/AjudaEdit';
import CheckoutSucesso from '../pages/CheckoutSucesso';
import Checkout from '../pages/Checkout';
import ListarUsuarios from '../pages/ListarUsuarios';
import VisualizarUsuario from '../pages/VisualizarUsuario';
import VisualizarEdit from '../pages/VisualizarEdit';
import RecuperarSenha from '../pages/RecuperarSenha';
//Para teste
import Login from '../pages/Login';
import PacoteEdit from '../pages/PacoteEdit';

const Routes = () => {
  const [token, setToken] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    const tokenAux = auth.getToken();
    const userAux = userStorage.getUser();
    if (tokenAux) {
      setToken(tokenAux);
    }
    if (userAux) {
      setUser(userAux);
    }
  }, []);

  return (
    <BrowserRouter>
      <RoutesDOM>
        {token && (
          <>
            {user?.admin && (
              <>
                <Route path="/categoria/add" element={<CategoriaAdd />} />
                <Route path="/categoria/:id/edit" element={<CategoriaEdit />} />
                <Route path="/pacotes/:id/edit" element={<PacoteEdit />} />
                <Route path="/ajuda/edit" element={<AjudaEdit />} />
                <Route
                  path="/VisualizarUsuario/:id"
                  element={<VisualizarUsuario />}
                />
                <Route
                  path="/VisualizarEdit/:id/editar"
                  element={<VisualizarEdit />}
                />
                <Route path="/listarUsuarios" element={<ListarUsuarios />} />
              </>
            )}
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/perfil/edit" element={<PerfilEdit />} />
            <Route path="/checkoutSucesso" element={<CheckoutSucesso />} />
            <Route path="/checkout" element={<Checkout />} />
          </>
        )}
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/pesquisa" element={<Pesquisa />} />
        <Route path="/pacotes" element={<Pacotes />} />
        <Route path="/pacotes/:id" element={<Pacote />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/ajuda" element={<Ajuda />} />
        <Route path="/RecuperarSenha" element={<RecuperarSenha />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </RoutesDOM>
    </BrowserRouter>
  );
};
export default Routes;
