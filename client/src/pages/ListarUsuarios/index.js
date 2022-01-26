import React, { useState, useEffect } from "react";
import UsuarioCard from "../../components/UsuarioCard";
import isLogado from "../../components/UsuarioCard";

const ListarUsuarios = () => {
  const [isLogado, setIsLogado] = useState(true);
  const [isAdmin, setIsAdmin] = useState(true);
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/listarUsuarios")
      .then((res) => res.json())
      .then((res) => setUser(res.user));
  }, []);

  return (
    <>
      <section class="container container-pacotes">
        <h1 class="title-bar"> Listagem de usuários </h1>

        {isLogado && isAdmin ? (
          <>
            <div class="travel-cards">
              <UsuarioCard />
            </div>

            <div class="container paginacao">
              <a href="" class="nav-pag">
                Anterior{" "}
              </a>
              <a href="" class="nav-pag">
                1
              </a>
              <a href="" class="nav-pag">
                2
              </a>
              <a href="" class="nav-pag">
                3
              </a>
              <a href="" class="nav-pag">
                4
              </a>
              <a href="" class="nav-pag">
                5
              </a>
              <a href="" class="nav-pag">
                Próxima
              </a>
            </div>
          </>
        ) : null}
      </section>
    </>
  );
};

export default ListarUsuarios;
