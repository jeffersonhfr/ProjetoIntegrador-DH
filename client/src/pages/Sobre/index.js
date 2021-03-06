import React, { useState } from 'react';
import sobrenos from './sobrenos.json';

const Sobre = ({ tokenAdmin }) => {
  const { tituloPrincipal, tituloHistoria, textoHistoria } = sobrenos;

  return (
    <>
      <section className="sobre">
        <div className="container">
          <div className="sobre-container">
            <div className="sobre-container__nav">
              <h1 id="sobre">{tituloPrincipal}</h1>

              {tokenAdmin && (
                <a href="/sobre/editar" className="bt-edit">
                  Editar
                </a>
              )}
            </div>
            <span id="historia"></span>
            <h2>{tituloHistoria}</h2>
            <p>{textoHistoria}</p>
          </div>

          <div className="formulario" id="fale">
            <h2>Fale Conosco:</h2>
            <form name="form">
              <div className="campos_form">
                <label htmlFor="nome">Nome</label>
                <input id="nome" type="text" required />
              </div>

              <div className="campos_form">
                <label htmlFor="email">E-mail</label>
                <input id="email" type="email" required />
              </div>

              <div className="campos_form">
                <label htmlFor="mensagem">Mensagem</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows="14"
                  cols="50"
                ></textarea>
              </div>
              <div className="campos_form">
                <button type="submit" className="btao-enviar">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sobre;
