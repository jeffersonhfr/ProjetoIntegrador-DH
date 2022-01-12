import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AjudaEdit = () => {
  return (
    <>
      <Header />
      <section class="ajuda ajuda-edit">
        <div class="container">
          <div class="ajuda-container">
            <form action="" method="post" class="form-edit">
              <label for="tituloPrincipal">Título Principal</label>
              <input
                type="text"
                name="tituloPrincipal"
                class="form-titulo"
                value="tituloPrincipal"
              />
              <br />
              <br />

              <label for="tituloDuvidas">Título para dúvidas</label>
              <input
                type="text"
                name="tituloDuvidas"
                class="form-titulo"
                value="tituloDuvidas"
              />
              <label for="textoDuvidas">
                Texto informativo sobre as dúvidas
              </label>
              <textarea name="textoDuvidas" class="form-campos form-textarea">
                textoDuvidas
              </textarea>
              <br />
              <br />

              <label for="tituloCancelamentos">Título para cancelamentos</label>
              <input
                type="text"
                name="tituloCancelamentos"
                class="form-titulo"
                value=" tituloCancelamentos"
              />
              <label for="textoDuvidas">
                Texto informativo sobre as cancelamento
              </label>
              <textarea
                name="textoCancelamentos"
                class="form-campos form-textarea"
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
                class="form-titulo"
                value=" tituloPolítica"
              />
              <label for="textoPolítica">
                Texto informativo sobre as políticas de privacidade
              </label>
              <textarea name="textoPolítica" class="form-campos form-textarea">
                textoPolítica
              </textarea>

              <button type="submit" class="form-btn">
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