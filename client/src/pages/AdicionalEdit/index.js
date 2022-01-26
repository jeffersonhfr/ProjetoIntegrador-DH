import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AdicionalEdit = () => {
  return (
    <>
      />
      <div className="container">
        <form action="" method="POST" className="formAdd">
          <article className="addPacote-TitleContainer">
            <h1 className="addPacote-TitleContainer">Editar Adicional</h1>
          </article>

          <ul className="Pacote-Propriedades nomeAdicional">
            <li className="Pacote-Propriedades__Item Pacote-Propriedades__Item--addpack">
              <label>Nome do Adicional</label>
              <input
                type="text"
                name="nomeAdicional"
                id="nomeAdicional"
                value=""
                placeholder="Nome do Adicional"
              />
            </li>
          </ul>

          <button
            type="submit"
            title="Criar Pacote"
            className="Pacote__Button-Comprar"
          >
            Editar
          </button>
        </form>
      </div>
      
    </>
  );
};

export default AdicionalEdit;
