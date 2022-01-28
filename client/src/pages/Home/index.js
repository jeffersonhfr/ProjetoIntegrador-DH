import React from 'react';
import Categorias from '../../components/Categorias';
import NewsLetter from '../../components/NewsLetter';
import BarraDeBusca from '../../components/BarraDeBusca';
import Promocoes from '../../components/Promocoes';
import Footer from '../../components/Footer';
import HeaderHome from '../../components/HeaderHome';

const Home = () => {
  return (
    <>
      <HeaderHome />
      <BarraDeBusca />
      <Categorias />
      <Promocoes />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
