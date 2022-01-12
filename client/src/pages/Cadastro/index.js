import React, { useState } from 'react';
import Header from '../../components/Header';
import Filtro from '../../components/Filtro';
import TravelCard from '../../components/TravelCard';
import Footer from '../../components/Footer';

const Cadastro = () => {
  return (
    <>
      <Header />
      <section className="container-login">
        <div className="container-imagem-login">
          <img
            className="imagem-login"
            src="assets/img/imagem-login.jpeg"
            alt="imagem login"
            width="310px"
            height="290px"
          />
        </div>

        <div className="container-formulario-login">
          <form action="" id="formulario-cadastro" method="POST">
            <fieldset>
              <div className="formulario-login__dados">
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Nome"
                  required
                />
              </div>

              <div className="formulario-login__dados">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-mail"
                  required
                />
              </div>

              <div className="formulario-login__dados">
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  placeholder="Senha:"
                  required
                />
                <input
                  type="password"
                  id="confimar-senha"
                  placeholder="Confirmar senha:"
                  required
                />
              </div>
            </fieldset>

            <div className="container-aceite">
              <input type="checkbox" id="aceite" name="aceite" required />
              <label for="aceite">
                Li e aceito os{' '}
                <a href="/termos-de-servico" className="aceite__termos-servico">
                  {' '}
                  Termos e condições
                </a>{' '}
                de serviço{' '}
              </label>
            </div>

            <div className="container-aceite">
              <input type="checkbox" id="novidades" name="novidades" />
              <label for="novidades">
                Desejo receber as promoções, novidades e dicas.
              </label>
            </div>

            <div className="container-botao-login">
              <button className="botao-login" type="submit">
                CADASTRAR-SE
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Cadastro;
