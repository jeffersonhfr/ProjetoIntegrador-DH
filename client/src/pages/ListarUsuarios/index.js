import React, { useState } from "react";
import UsuarioCard from "../../components/UsuarioCard";
import isLogado from "../../components/UsuarioCard";

const ListarUsuarios = () => {
  const [isLogado, setIsLogado] = useState(true);
  const [isAdmin, setIsAdmin] = useState(true);

  const users = [
    {
      nome: "Adriana Silva",
      email: "adriana@viagem.com",
      senha: "$2b$10$yX.Wc/ikv6tLLzlo71sQou.4vDQotyRX8AYL473B2NQvsR166nYHO",
      cpf: "333.444.555-66",
      nascimento: "1976/08/27",
      admin: 1,
      avatar: "/assets/img/Aventura.jpg",
      telefone: "(31)99999999",
      cep: 12345654,
      logradouro: "Rua Queijin",
      numero: "34-b",
      complemento: "casa 3",
      localidade: "Belo Horizonte",
      uf: "MG",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nome: "Fabiano Matoso",
      email: "fabiano@gmail.com",
      senha: "$2b$10$yX.Wc/ikv6tLLzlo71sQou.4vDQotyRX8AYL473B2NQvsR166nYHO",
      cpf: "333.444.555-66",
      nascimento: "1936/08/27",
      admin: 0,
      avatar: "/assets/img/Aventura.jpg",
      telefone: "(47)999999999",
      cep: 12345654,
      logradouro: "Rua da Praia",
      numero: "3142",
      complemento: "Casa Amarela",
      localidade: "Florianópolis",
      uf: "SC",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  return (
    <>
      <section class="container container-pacotes">
        <h1 class="title-bar"> Listagem de usuários </h1>

        {isLogado && isAdmin ? (
          <>
            <div class="travel-cards">
              {users.map((users) => (
                <UsuarioCard
                  usuario={users}
                  isLogado={setIsLogado}
                  isAdmin={setIsAdmin}
                />
              ))}
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
