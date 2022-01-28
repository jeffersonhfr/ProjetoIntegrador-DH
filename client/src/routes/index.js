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
import HeaderHome from '../components/HeaderHome';
import ScrollToTop from '../components/ScrollToTop';

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
      <ScrollToTop>
        <RoutesDOM>
          {token && (
            <>
              {user?.admin && (
                <>
                  <Route
                    path="/categoria/add"
                    element={[<Header />, <CategoriaAdd />]}
                  />
                  <Route
                    path="/categoria/:id/edit"
                    element={[<Header />, <CategoriaEdit />]}
                  />
                  <Route
                    path="/pacotes/:id/edit"
                    element={[<Header />, <PacoteEdit />]}
                  />
                  <Route
                    path="/ajuda/edit"
                    element={[<Header />, <AjudaEdit />]}
                  />
                  <Route
                    path="/VisualizarUsuario/:id"
                    element={[<Header />, <VisualizarUsuario />]}
                  />
                  <Route
                    path="/VisualizarEdit/:id/editar"
                    element={[<Header />, <VisualizarEdit />]}
                  />
                  <Route
                    path="/listarUsuarios"
                    element={[<Header />, <ListarUsuarios />]}
                  />
                </>
              )}
              <Route path="/perfil" element={[<Header />, <Perfil />]} />
              <Route
                path="/perfil/edit"
                element={[<Header />, <PerfilEdit />]}
              />
              <Route
                path="/checkoutSucesso"
                element={[<Header />, <CheckoutSucesso />]}
              />
              <Route path="/checkout" element={[<Header />, <Checkout />]} />
            </>
          )}
          <Route path="/login" element={[<Header />, <Login />]} />
          <Route path="/cadastro" element={[<Header />, <Cadastro />]} />
          <Route path="/pesquisa" element={[<Header />, <Pesquisa />]} />
          <Route path="/pacotes" element={[<Header />, <Pacotes />]} />
          <Route path="/pacotes/:id" element={[<Header />, <Pacote />]} />
          <Route path="/sobre" element={[<Header />, <Sobre />]} />
          <Route path="/ajuda" element={[<Header />, <Ajuda />]} />
          <Route
            path="/RecuperarSenha"
            element={[<Header />, <RecuperarSenha />]}
          />
          <Route path="/" element={[<HeaderHome />, <Home />]} />
          <Route path="*" element={[<Header />, <NotFound />]} />
        </RoutesDOM>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
};
export default Routes;
