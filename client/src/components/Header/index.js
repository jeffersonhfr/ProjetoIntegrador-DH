import React, { useState } from 'react';

const Header = () => {
  const [isLogado, setIsLogado] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  

  return (
    <header class="cabecalho">
      <div class="cabecalho__sobreposicao">
        <div class="container cabecalho__navegacao">
          <a href="/">
            <div>
              <img
                alt="Logo Viagem.com"
                class="cabecalho_logo"
                src="/assets/img/logo01.png"
                alt="logo"
                width="234px"
                height="51px"
              />
            </div>
          </a>
          <nav class="cabecalho__menu-mobile">
            <input
              class="cabecallho__menu-hamburguer"
              id="cabecallho__menu-hamburguer"
              type="checkbox"
            />
            <label for="cabecallho__menu-hamburguer">
              <div class="menu-hamburguer__conteudo">
                <span class="menu-hamburguer__icone"></span>
                <div class="menu-hamburguer__menu-mobile">
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
                        <li class="separador"></li>
                        <li>
                          <a href="/perfil">Meu Perfil</a>
                        </li>
                        <li>
                          <a href="/minhas-viagens">Minhas Viagens</a>
                        </li>
                        <li class="login">
                          <a href="/logout">Logout</a>
                        </li>
                      </>
                    ) : isLogado && isAdmin ? (
                      <>
                        <li class="separador"></li>
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
                        <li class="login">
                          <a href="/logout">Logout</a>
                        </li>
                      </>
                    ) : (
                      <li class="login">
                        <a href="/login">Login</a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </label>
          </nav>

          <nav class="cabecalho__menu-desk">
            <ul class="flex">
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
                  <li class="menu__desk">
                    {' '}
                    <img
                      alt="Foto do Usuário"
                      class="menu__desk-foto"
                      src="<%=usuarioAvatar %>"
                      alt="foto de perfil"
                      width="50px"
                      height="50px"
                    />
                  </li>
                </>
              ) : isLogado && isAdmin ? (
                <>
                  <li class="menu__desk">
                    {' '}
                    <img
                      alt="Foto do Usuário"
                      class="menu__desk-foto"
                      src="<%= usuarioAvatar %>"
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

        {isLogado && !isAdmin ? (
          <>
            <div class="container flex-end">
              <div class="menu__desk-conteudo">
                <ul>
                  <li>
                    <a href="/perfil">Meu Perfil</a>
                  </li>
                  <li>
                    <a href="/minhas-viagens">Minhas Viagens</a>
                  </li>
                  <li class="login">
                    <a href="/logout">Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </>
        ) : isLogado && isAdmin ? (
          <>
            <div class="container flex-end">
              <div class="menu__desk-conteudo">
                <ul>
                  <li>
                    <a href="/perfil">Meu Perfil</a>
                  </li>
                  <li>
                    <a href="/minhas-viagens">Minhas Viagens</a>
                  </li>
                  <li class="separador"></li>
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
                  <li class="login">
                    <a href="/logout">Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </>
        ) : null}

      
      </div>
    </header>
  );
};

export default Header;
