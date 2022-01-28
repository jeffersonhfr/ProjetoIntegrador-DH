import React, { useState, useEffect } from 'react';
import UsuarioCard from '../../components/UsuarioCard';
import isLogado from '../../components/UsuarioCard';

const ListarUsuarios = () => {
  const [isLogado, setIsLogado] = useState(true);
  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <>
      <section class="container container-pacotes">
        <h1 class="title-bar"> Listagem de usuários </h1>

        {isLogado && isAdmin ? (
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
