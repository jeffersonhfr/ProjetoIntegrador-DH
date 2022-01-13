import React, { useState } from 'react';

const Ajuda = ({user}) => {
  const [isLogado] = useState(user!=null);
  const [isAdmin] = useState(user.admin===1);

  return (
    <>
      
      <section className="ajuda">
        <div className="container">
          <div className="ajuda-container">
            <div className="ajuda-container__nav">
              <h1 id="ajuda">tituloPrincipal</h1>

              {isLogado && isAdmin ? (
                <a href="/ajuda/editar" className="bt-edit">
                  Editar
                </a>
              ) : null}
            </div>
            <span id="duvidas"></span>
            <h2>tituloDuvidas</h2>
            <p>textoDuvidas</p>
            <span id="cancelamentos"></span>
            <h2>tituloCancelamentos</h2>
            <p>textoCancelamentos</p>
            <span id="politica-privacidade"></span>
            <h2>tituloPolítica</h2>
            <p>textoPolítica</p>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Ajuda;
