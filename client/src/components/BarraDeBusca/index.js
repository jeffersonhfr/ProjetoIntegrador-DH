import React from 'react';

const BarraDeBusca = () => {
  return (
    <div className="container" style={{ justifyContent: 'center' }}>
      <section className="container-busca">
        <form className="container-busca__form" action="/pesquisa">
          <div className="container-busca__form__campos">
            <div className="container-busca__form__campos__itens container-busca__form__campos__itens--primeiro">
              <div className="busca__campo">
                <label>Para onde desejar viajar?</label>
                <input
                  type="text"
                  id="onde"
                  name="onde"
                  placeholder="Escreva aqui o local para onde deseja ir"
                  required
                />
              </div>
            </div>
          </div>
          <input
            type="submit"
            value="Buscar"
            className="busca__campo__submit"
          />
        </form>
      </section>
    </div>
  );
};

export default BarraDeBusca;
