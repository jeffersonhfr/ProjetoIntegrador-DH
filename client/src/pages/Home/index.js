import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Categorias from '../../components/Categorias';
import NewsLetter from '../../components/NewsLetter';
import BarraDeBusca from '../../components/BarraDeBusca';
import Promocoes from '../../components/Promocoes';

const Home = ({ user }) => {
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
