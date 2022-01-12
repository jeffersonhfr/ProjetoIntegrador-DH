import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AdicionalEdit = () => {
  return (
    <>
      <Header />
      <div class="container">
        <form action="" method="POST" class="formAdd">
          <article class="addPacote-TitleContainer">
            <h1 class="addPacote-TitleContainer">Editar Adicional</h1>
          </article>

          <ul class="Pacote-Propriedades nomeAdicional">
            <li class="Pacote-Propriedades__Item Pacote-Propriedades__Item--addpack">
              <label>Nome do Adicional</label>
              <input
                type="text"
                name="nomeAdicional"
                id="nomeAdicional"
                value=""
                placeholder="Nome do Adicional"
              />
            </li>
          </ul>

          <button
            type="submit"
            title="Criar Pacote"
            class="Pacote__Button-Comprar"
          >
            Editar
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default AdicionalEdit;