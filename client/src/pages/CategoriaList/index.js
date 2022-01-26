import React from 'react';
import Header from '../../components/Header';
import CategoriaList from '../../components/CategoriaList';
import Footer from '../../components/Footer';

const AdicionalList = () => {
  return (
    <>
      />
      <section className="container container-pacotes">
        {isLogado && isAdmin ? (
          <div className="title-bar">
            <h1>Listagem de Categorias</h1>
            <a href="listarCategoria/adicionar" className="travel-cards__btao">
              Cadastar Categoria
            </a>
          </div>
        ) : (
          <div className="title-bar">
            <h1 className="title-bar"> Listagem de Categorias </h1>
          </div>
        )}

        <div className="travel-cards">
          <CategoriaList />
        </div>
      </section>

      
    </>
  );
};

export default AdicionalList;
