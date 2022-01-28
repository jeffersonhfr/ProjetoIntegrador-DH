import React, { useEffect, useState } from 'react';
import auth from '../../storage/auth';
import userStorage from '../../storage/user';
import menuToggle from './scripts/menu';

const HeaderHome = () => {
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

  let header = (
    <>
      <header className="cabecalho">
        <div className="cabecalho__sobreposicao">
          <div className="container cabecalho__navegacao">
            <a href="/">
              <div>
                <img
                  alt="Logo Viagem.com"
                  className="cabecalho_logo"
                  src="/assets/img/logo01.png"
                  alt="logo"
                  width="234px"
                  height="51px"
                />
              </div>
            </a>
            <nav className="cabecalho__menu-mobile">
              <input
                className="cabecallho__menu-hamburguer"
                id="cabecallho__menu-hamburguer"
                type="checkbox"
              />
              <label htmlFor="cabecallho__menu-hamburguer">
                <div className="menu-hamburguer__conteudo">
                  <span className="menu-hamburguer__icone"></span>
                  <div className="menu-hamburguer__menu-mobile">
                    <ul>
                      <li>
                        <a href="/pacotes">Viagens Temáticas</a>
                      </li>
                      <li>
                        <a href="/pacotes">Nossos Pacotes</a>
                      </li>
                      <li>
                        <a href="/sobre">Sobre Nós</a>
                      </li>
                      <li>
                        <a href="/ajuda">Ajuda</a>
                      </li>

                      {token ? (
                        <>
                          <li className="separador"></li>
                          <li>
                            <a href="/perfil">Meu Perfil</a>
                          </li>
                          <li>
                            <a href="/minhas-viagens">Minhas Viagens</a>
                          </li>

                          {user?.admin && (
                            <>
                              <li className="separador"></li>
                              <li>
                                <a href="/listarUsuarios">Gestão de Usuários</a>
                              </li>
                              <li>
                                <a href="/minhas-viagens/todos-pedidos">
                                  Visualizar Todos os Pedidos
                                </a>
                              </li>
                              <li>
                                <a href="/listarCategoria">
                                  Cadastrar Categorias
                                </a>
                              </li>
                              <li>
                                <a href="/listarAdicional">
                                  Cadastrar Adicionais
                                </a>
                              </li>
                            </>
                          )}
                          <li className="login">
                            <a href="/logout">Logout</a>
                          </li>
                        </>
                      ) : (
                        <li className="login">
                          <a href="/login">Login</a>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </label>
            </nav>

            <nav className="cabecalho__menu-desk">
              <ul className="flex">
                <li>
                  <a href="/pacotes">Viagens Temáticas</a>
                </li>
                <li>
                  <a href="/pacotes">Nossos Pacotes</a>
                </li>
                <li>
                  <a href="/sobre">Sobre Nós</a>
                </li>
                <li>
                  <a href="/ajuda">Ajuda</a>
                </li>

                {token ? (
                  <>
                    <li className="menu__desk" onClick={menuToggle}>
                      <img
                        alt="Foto do Usuário"
                        className="menu__desk-foto"
                        src={user.avatar}
                        alt="foto de perfil"
                        width="50px"
                        height="50px"
                      />
                    </li>
                  </>
                ) : (
                  <li>
                    <a href="/login">Login</a>
                  </li>
                )}
              </ul>
            </nav>
          </div>

          {token && (
            <>
              <div className="container flex-end">
                <div className="menu__desk-conteudo">
                  <ul>
                    <li>
                      <a href="/perfil">Meu Perfil</a>
                    </li>
                    <li>
                      <a href="/minhas-viagens">Minhas Viagens</a>
                    </li>

                    {user?.admin && (
                      <>
                        <li className="separador"></li>
                        <li>
                          <a href="/listarUsuarios">Gestão de Usuários</a>
                        </li>
                        <li>
                          <a href="/minhas-viagens/todos-pedidos">
                            Visualizar Todos os Pedidos
                          </a>
                        </li>
                        <li>
                          <a href="/listarCategoria">Cadastrar Categorias</a>
                        </li>
                        <li>
                          <a href="/listarAdicional">Cadastrar Adicionais</a>
                        </li>
                      </>
                    )}
                    <li className="login">
                      <a href="/logout">Logout</a>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      </header>
    </>
  );

  return <>{header}</>;
};

export default HeaderHome;
