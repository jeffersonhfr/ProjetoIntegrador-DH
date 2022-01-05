import React from "react";

const NewsLetter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter__imagem">
        <div className="newsletter__sobreposicao">
          <div className="container" style={{ justifyContent: "center" }}>
            <div className="newsletter__box">
              <h2 className="newsletter__titulo"> Fique por dentro!</h2>
              <p className="newsletter__subtitulo">
                Cadastre seus dados abaixo e fique sabendo em primeira mão das
                melhores ofertas para sua próxima viagem.
              </p>
              <section className="fique-por-dentro">
                <form className="fique-por-dentro__form">
                  <div className="fique-por-dentro__form__campos">
                    <div className="fique-por-dentro__form__campos__itens fique-por-dentro__form__campos__itens--primeiro">
                      <div className="fique-por-dentro__input">
                        <label for="nome">Nome</label>
                        <input
                          type="text"
                          id="nome"
                          name="nome"
                          placeholder="Insira aqui o seu nome"
                        />
                      </div>
                    </div>
                    <div className="fique-por-dentro__form__campos__itens fique-por-dentro__form__campos__itens divisao"></div>
                    <div className="fique-por-dentro__form__campos__itens fique-por-dentro__form__campos__itens--segundo">
                      <div className="fique-por-dentro__input">
                        <label for="E-mail">E-mail</label>
                        <input
                          type="email"
                          id="emailNews"
                          name="email"
                          placeholder="Insira aqui o seu melhor e-mail"
                        />
                      </div>
                    </div>
                  </div>
                  <input
                    type="submit"
                    value="Enviar"
                    className="fique-por-dentro__input__submit"
                  />
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NewsLetter;
