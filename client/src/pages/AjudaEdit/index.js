import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AjudaEdit = () => {
  return (
    <>
      <Header />
      <section className="ajuda ajuda-edit">
        <div className="container">
          <div className="ajuda-container">
            <form action="" method="post" className="form-edit">
              <label for="tituloPrincipal">Título Principal</label>
              <input
                type="text"
                name="tituloPrincipal"
                className="form-titulo"
                value="tituloPrincipal"
              />
              <br />
              <br />

              <label for="tituloDuvidas">Título para dúvidas</label>
              <input
                type="text"
                name="tituloDuvidas"
                className="form-titulo"
                value="tituloDuvidas"
              />
              <label for="textoDuvidas">
                Texto informativo sobre as dúvidas
              </label>
              <textarea name="textoDuvidas" className="form-campos form-textarea">
                textoDuvidas
              </textarea>
              <br />
              <br />

              <label for="tituloCancelamentos">Título para cancelamentos</label>
              <input
                type="text"
                name="tituloCancelamentos"
                className="form-titulo"
                value=" tituloCancelamentos"
              />
              <label for="textoDuvidas">
                Texto informativo sobre as cancelamento
              </label>
              <textarea
                name="textoCancelamentos"
                className="form-campos form-textarea"
              >
                textoCancelamentos
              </textarea>
              <br />
              <br />

              <label for="tituloPolítica">
                Título para as políticas de privacidade
              </label>
              <input
                type="text"
                name="tituloPolítica"
                className="form-titulo"
                value=" tituloPolítica"
              />
              <label for="textoPolítica">
                Texto informativo sobre as políticas de privacidade
              </label>
              <textarea name="textoPolítica" className="form-campos form-textarea">
                textoPolítica
              </textarea>

              <button type="submit" className="form-btn">
                Confirmar alterações
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AjudaEdit;
