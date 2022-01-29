import React, { useState, useEffect } from "react";
import UsuarioCard from "../../components/UsuarioCard";

const ListarUsuarios = ({ tokenUser, tokenAdmin }) => {
  return (
    <>
      <section class="container container-pacotes">
        <h1 class="title-bar"> Listagem de usuários </h1>

        {tokenAdmin ? (
          <>
            <div class="travel-cards">
              <UsuarioCard />
            </div>
          </>
        ) : null}
      </section>
    </>
  );
};

export default ListarUsuarios;
