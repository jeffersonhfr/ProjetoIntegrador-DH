import React from 'react';
import Header from '../../components/Header';
import AdicionaisList from '../../components/AdicionaisList';
import Footer from '../../components/Footer';

const AdicionalList = () => {
  return (
    <>
      <Header />
      <section class="container container-pacotes">
        {isLogado && isAdmin ? (
          <div class="title-bar">
            <h1>Listagem dos Adicionais</h1>
            <a href="listarAdicional/adicionar" class="travel-cards__btao">
              Cadastrar Adicional
            </a>
          </div>
        ) : (
          <div class="title-bar">
            <h1 class="title-bar"> Listagem dos Adicionais</h1>
          </div>
        )}

        <div class="travel-cards add-cards">
          <AdicionaisList />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AdicionalList;
