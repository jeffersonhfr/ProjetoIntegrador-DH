import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Categories from "../../components/Categories";
import NewsLetter from "../../components/NewsLetter";
import BarraDeBusca from "../../components/BarraDeBusca";

const Home = () => {
  return (
    <>
      <Header />
      <BarraDeBusca />
      <Categories />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
