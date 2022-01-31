import React, { useState } from 'react';
import ajuda from './ajuda.json';

const Ajuda = ({ tokenAdmin }) => {
  const {
    tituloPrincipal,
    tituloDuvidas,
    textoDuvidas,
    tituloCancelamentos,
    textoCancelamentos,
    tituloPolítica,
    textoPolítica,
  } = ajuda;

  return (
    <>
      <section className="ajuda">
        <div className="container">
          <div className="ajuda-container">
            <div className="ajuda-container__nav">
              <h1 id="ajuda">{ajuda.tituloPrincipal}</h1>
              {tokenAdmin && (
                <a href="/ajuda/editar" className="bt-edit">
                  Editar
                </a>
              )}
            </div>
            <span id="duvidas"></span>
            <h2>{ajuda.tituloDuvidas}</h2>
            <p>{ajuda.textoDuvidas}</p>
            <span id="cancelamentos"></span>
            <h2>{ajuda.tituloCancelamentos}</h2>
            <p>{ajuda.textoCancelamentos}</p>
            <span id="politica-privacidade"></span>
            <h2>{ajuda.tituloPolítica}</h2>
            <p>{ajuda.textoPolítica}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ajuda;
