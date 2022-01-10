import React, { useState } from 'react';
import menuToggle from './scripts/menu';
const Header = () => {
  const [isLogado, setIsLogado] = useState(true);
  const [isAdmin, setIsAdmin] = useState(true);
  const [isIndex, setIsIndex] = useState(true);

  let perfil = '/assets/img/Aventura.jpg';
  let header = (
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
            <label for="cabecallho__menu-hamburguer">
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

                    {isLogado && !isAdmin ? (
                      <>
                        <li className="separador"></li>
                        <li>
                          <a href="/perfil">Meu Perfil</a>
                        </li>
                        <li>
                          <a href="/minhas-viagens">Minhas Viagens</a>
                        </li>
                        <li className="login">
                          <a href="/logout">Logout</a>
                        </li>
                      </>
                    ) : isLogado && isAdmin ? (
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

              {isLogado && !isAdmin ? (
                <>
                  <li className="menu__desk" onClick={menuToggle}>
                    {' '}
                    <img
                      alt="Foto do Usuário"
                      className="menu__desk-foto"
                      src={perfil}
                      alt="foto de perfil"
                      width="50px"
                      height="50px"
                    />
                  </li>
                </>
              ) : isLogado && isAdmin ? (
                <>
                  <li className="menu__desk" onClick={menuToggle}>
                    {' '}
                    <img
                      alt="Foto do Usuário"
                      className="menu__desk-foto"
                      src={perfil}
                      alt="foto de perfil"
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
      </div>

      {isLogado && !isAdmin ? (
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
                <li className="login">
                  <a href="/logout">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </>
      ) : isLogado && isAdmin ? (
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
                <li className="login">
                  <a href="/logout">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </>
      ) : null}
    </header>
  );

  return (
    <>
      {isIndex ? (
        <>{header}</>
      ) : (
        <>
          <header className="cabecalho-paginas">
            <div className="header_container">{header}</div>
          </header>
        </>
      )}
    </>
  );
};

export default Header;
