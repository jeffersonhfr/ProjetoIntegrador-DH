import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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

  const handleLogout = () => {
    auth.removeToken();
    userStorage.removeUser();
    window.location.reload();
  };

  let header = (
    <>
      <header className="cabecalho">
        <div className="cabecalho__sobreposicao">
          <div className="container cabecalho__navegacao">
            <Link to="/">
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
            </Link>
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
                        <Link to="/pacotes">Viagens Temáticas</Link>
                      </li>
                      <li>
                        <Link to="/pacotes">Nossos Pacotes</Link>
                      </li>
                      <li>
                        <Link to="/sobre">Sobre Nós</Link>
                      </li>
                      <li>
                        <Link to="/ajuda">Ajuda</Link>
                      </li>

                      {token ? (
                        <>
                          <li className="separador"></li>
                          <li>
                            <Link to="/perfil">Meu Perfil</Link>
                          </li>
                          <li>
                            <Link to="/minhas-viagens">Minhas Viagens</Link>
                          </li>

                          {user?.admin && (
                            <>
                              <li className="separador"></li>
                              <li>
                                <Link to="/listarUsuarios">
                                  Gestão de Usuários
                                </Link>
                              </li>
                              <li>
                                <Link to="/minhas-viagens/todos-pedidos">
                                  Visualizar Todos os Pedidos
                                </Link>
                              </li>
                              <li>
                                <Link to="/listarCategoria">
                                  Cadastrar Categorias
                                </Link>
                              </li>
                              <li>
                                <Link to="/listarAdicional">
                                  Cadastrar Adicionais
                                </Link>
                              </li>
                            </>
                          )}
                          <li className="login">
                            <Link to="" onClick={handleLogout}>
                              Logout
                            </Link>
                          </li>
                        </>
                      ) : (
                        <li className="login">
                          <Link to="/login">Login</Link>
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
                  <Link to="/pacotes">Viagens Temáticas</Link>
                </li>
                <li>
                  <Link to="/pacotes">Nossos Pacotes</Link>
                </li>
                <li>
                  <Link to="/sobre">Sobre Nós</Link>
                </li>
                <li>
                  <Link to="/ajuda">Ajuda</Link>
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
                    <Link to="/login">Login</Link>
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
                      <Link to="/perfil">Meu Perfil</Link>
                    </li>
                    <li>
                      <Link to="/minhas-viagens">Minhas Viagens</Link>
                    </li>

                    {user?.admin && (
                      <>
                        <li className="separador"></li>
                        <li>
                          <Link to="/listarUsuarios">Gestão de Usuários</Link>
                        </li>
                        <li>
                          <Link to="/minhas-viagens/todos-pedidos">
                            Visualizar Todos os Pedidos
                          </Link>
                        </li>
                        <li>
                          <Link to="/listarCategoria">
                            Cadastrar Categorias
                          </Link>
                        </li>
                        <li>
                          <Link to="/listarAdicional">
                            Cadastrar Adicionais
                          </Link>
                        </li>
                      </>
                    )}
                    <li className="login">
                      <Link to="" onClick={handleLogout}>
                        Logout
                      </Link>
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
