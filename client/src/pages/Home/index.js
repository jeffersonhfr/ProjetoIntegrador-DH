import React from 'react';
import BarraDeBusca from '../../components/BarraDeBusca';
import Categorias from '../../components/Categorias';
import NewsLetter from '../../components/NewsLetter';
import Promocoes from '../../components/Promocoes';

const Home = ({ tokenAdmin, tokenUser }) => {
  return (
    <>
      <BarraDeBusca />
      <Categorias />
      <Promocoes />
      <NewsLetter />
    </>
  );
};

export default Home;
