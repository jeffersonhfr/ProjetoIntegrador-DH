import React from 'react';
import Header from '../../components/Header';
import AdicionaisList from '../../components/AdicionaisList';
import Footer from '../../components/Footer';

const AdicionalList = () => {
  return (
    <>
      <Header />
      <section className="container container-pacotes">
        {isLogado && isAdmin ? (
          <div className="title-bar">
            <h1>Listagem dos Adicionais</h1>
            <a href="listarAdicional/adicionar" className="travel-cards__btao">
              Cadastrar Adicional
            </a>
          </div>
        ) : (
          <div className="title-bar">
            <h1 className="title-bar"> Listagem dos Adicionais</h1>
          </div>
        )}

        <div className="travel-cards add-cards">
          <AdicionaisList />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AdicionalList;
