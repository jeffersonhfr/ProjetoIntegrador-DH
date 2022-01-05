import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Categories from "../../components/Categories";
import NewsLetter from "../../components/NewsLetter";

const Home = () => {
  return (
    <>
      <Header />
      <Categories />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
