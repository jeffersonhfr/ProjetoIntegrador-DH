import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="container container-historico container-historico-null">
        <div className="box1">
          <h1>Desculpa! Página não encontrada</h1>
          <h2>
            Mas você pode continuar navegando. Com certeza você irá achar os
            melhores pacotes para planejar agora mesmo suas férias.
          </h2>
        </div>
        <div className="box2">
          <img src="assets/img/404.png" width="100%" alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
