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
import CategoriaList from '../components/CategoriaList';
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
  const [tokenAdmin, setTokenAdmin] = useState();
  const [tokenUser, setTokenUser] = useState();

  useEffect(() => {
    const tokenAux = auth.getToken();
    const userAux = userStorage.getUser();
    if (tokenAux) {
      setTokenAdmin(tokenAux);
    }
    if (userAux) {
      setTokenUser(userAux);
    }
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop>
        <RoutesDOM>
          {tokenAdmin && (
            <>
              {tokenUser?.admin && (
                <>
                  <Route
                    path="/categoria/add"
                    element={[
                      <Header tokenAdmin={tokenAdmin} tokenUser={tokenUser} />,
                      <CategoriaAdd
                        tokenAdmin={tokenAdmin}
                        tokenUser={tokenUser}
                      />,
                    ]}
                  />
                  <Route
                    path="/categoria/:id/edit"
                    element={[
                      <Header tokenAdmin={tokenAdmin} tokenUser={tokenUser} />,
                      <CategoriaEdit
                        tokenAdmin={tokenAdmin}
                        tokenUser={tokenUser}
                      />,
                    ]}
                  />
                  <Route
                    path="/pacotes/:id/edit"
                    element={[
                      <Header tokenAdmin={tokenAdmin} tokenUser={tokenUser} />,
                      <PacoteEdit
                        tokenAdmin={tokenAdmin}
                        tokenUser={tokenUser}
                      />,
                    ]}
                  />
                  <Route
                    path="/ajuda/edit"
                    element={[
                      <Header tokenAdmin={tokenAdmin} tokenUser={tokenUser} />,
                      <AjudaEdit
                        tokenAdmin={tokenAdmin}
                        tokenUser={tokenUser}
                      />,
                    ]}
                  />
                  <Route
                    path="/VisualizarUsuario/:id"
                    element={[
                      <Header tokenAdmin={tokenAdmin} tokenUser={tokenUser} />,
                      <VisualizarUsuario
                        tokenAdmin={tokenAdmin}
                        tokenUser={tokenUser}
                      />,
                    ]}
                  />
                  <Route
                    path="/VisualizarEdit/:id/editar"
                    element={[
                      <Header tokenAdmin={tokenAdmin} tokenUser={tokenUser} />,
                      <VisualizarEdit
                        tokenAdmin={tokenAdmin}
                        tokenUser={tokenUser}
                      />,
                    ]}
                  />
                  <Route
                    path="/listarUsuarios"
                    element={[
                      <Header tokenAdmin={tokenAdmin} tokenUser={tokenUser} />,
                      <ListarUsuarios
                        tokenAdmin={tokenAdmin}
                        tokenUser={tokenUser}
                      />,
                    ]}
                  />
                  <Route
                    path="/listarCategoria"
                    element={[
                      <Header tokenAdmin={tokenAdmin} tokenUser={tokenUser} />,
                      <CategoriaList
                        tokenAdmin={tokenAdmin}
                        tokenUser={tokenUser}
                      />,
                    ]}
                  />
                </>
              )}
              <Route
                path="/perfil"
                element={[
                  <Header tokenAdmin={tokenAdmin} tokenUser={tokenUser} />,
                  <Perfil tokenAdmin={tokenAdmin} tokenUser={tokenUser} />,
                ]}
              />
              <Route
                path="/perfil/edit"
                element={[
                  <Header tokenAdmin={tokenAdmin} tokenUser={tokenUser} />,
                  <PerfilEdit tokenAdmin={tokenAdmin} tokenUser={tokenUser} />,
                ]}
              />
              <Route
                path="/checkoutSucesso"
                element={[
                  <Header tokenAdmin={tokenAdmin} tokenUser={tokenUser} />,
                  <CheckoutSucesso
                    tokenAdmin={tokenAdmin}
                    tokenUser={tokenUser}
                  />,
                ]}
              />
              <Route
                path="/checkout"
                element={[
                  <Header tokenAdmin={tokenAdmin} tokenUser={tokenUser} />,
                  <Checkout tokenAdmin={tokenAdmin} tokenUser={tokenUser} />,
                ]}
              />
            </>
          )}
          <Route
            path="/login"
            element={[
              <Header tokenAdmin={tokenAdmin} tokenUser={tokenUser} />,
              <Login tokenAdmin={tokenAdmin} tokenUser={tokenUser} />,
            ]}
          />
          <Route
            path="/cadastro"
            element={[
              <Header tokenAdmin={tokenAdmin} tokenUser={tokenUser} />,
              <Cadastro />,
            ]}
          />
          <Route
            path="/pesquisa"
            element={[
              <Header tokenAdmin={tokenAdmin} tokenUser={tokenUser} />,
              <Pesquisa />,
            ]}
          />
          <Route
            path="/pacotes"
            element={[
              <Header tokenAdmin={tokenAdmin} tokenUser={tokenUser} />,
              <Pacotes tokenAdmin={tokenAdmin} tokenUser={tokenUser} />,
            ]}
          />
          <Route
            path="/pacotes/:id"
            element={[
              <Header tokenAdmin={tokenAdmin} tokenUser={tokenUser} />,
              <Pacote tokenAdmin={tokenAdmin} tokenUser={tokenUser} />,
            ]}
          />
          <Route
            path="/sobre"
            element={[
              <Header tokenAdmin={tokenAdmin} tokenUser={tokenUser} />,
              <Sobre tokenAdmin={tokenAdmin} tokenUser={tokenUser} />,
            ]}
          />
          <Route
            path="/ajuda"
            element={[
              <Header tokenAdmin={tokenAdmin} tokenUser={tokenUser} />,
              <Ajuda tokenAdmin={tokenAdmin} tokenUser={tokenUser} />,
            ]}
          />
          <Route
            path="/RecuperarSenha"
            element={[
              <Header tokenAdmin={tokenAdmin} tokenUser={tokenUser} />,
              <RecuperarSenha />,
            ]}
          />
          <Route
            path="/"
            element={[
              <HeaderHome tokenAdmin={tokenAdmin} tokenUser={tokenUser} />,
              <Home tokenAdmin={tokenAdmin} tokenUser={tokenUser} />,
            ]}
          />
          <Route
            path="*"
            element={[
              <Header tokenAdmin={tokenAdmin} tokenUser={tokenUser} />,
              <NotFound />,
            ]}
          />
        </RoutesDOM>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
};
export default Routes;
