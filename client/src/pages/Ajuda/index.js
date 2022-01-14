import React, { useState } from 'react';

const Ajuda = ({ user }) => {
  const [isLogado] = useState(user != null);
  const [isAdmin] = useState(user.admin === 1);
  const ajuda = {
    tituloPrincipal: 'Ajuda',
    tituloDuvidas: 'Dúvidas',
    textoDuvidas:
      'DUVIDA Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ipsum nibh, tincidunt at laoreet ac, bibendum non odio. Etiam quis tincidunt turpis, sed scelerisque nunc. Donec placerat justo at ornare blandit. Nulla pharetra justo et dolor varius condimentum. Ut nec condimentum quam. Duis rutrum purus in quam sagittis sagittis. Maecenas consectetur faucibus dolor a blandit. Sed vel risus eleifend, fermentum elit blandit, commodo nisi. Praesent a est ut tellus blandit porta eget porttitor mauris. Vivamus molestie libero nibh, in mattis libero viverra sit amet. Vestibulum tincidunt velit a arcu condimentum condimentum. Aenean congue semper ligula.<br>Proin laoreet molestie molestie. Curabitur porta mattis metus, quis pretium est vulputate a. Praesent congue tellus nec massa luctus, in dapibus arcu tincidunt. Etiam quis rutrum felis. Aliquam erat volutpat. Curabitur auctor vestibulum turpis sed viverra. Donec id rutrum magna. Donec id finibus orci. Morbi quis sollicitudin magna. Nunc eu pretium diam. Fusce venenatis pretium metus vitae rutrum. Praesent volutpat fermentum sapien a lacinia. Pellentesque nec orci sit amet justo condimentum vulputate.',
    tituloCancelamentos: 'Cancelamentos',
    textoCancelamentos:
      'CANCELAMENTO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ipsum nibh, tincidunt at laoreet ac, bibendum non odio. Etiam quis tincidunt turpis, sed scelerisque nunc. Donec placerat justo at ornare blandit. Nulla pharetra justo et dolor varius condimentum. Ut nec condimentum quam. Duis rutrum purus in quam sagittis sagittis. Maecenas consectetur faucibus dolor a blandit. Sed vel risus eleifend, fermentum elit blandit, commodo nisi. Praesent a est ut tellus blandit porta eget porttitor mauris. Vivamus molestie libero nibh, in mattis libero viverra sit amet. Vestibulum tincidunt velit a arcu condimentum condimentum. Aenean congue semper ligula.Proin laoreet molestie molestie. Curabitur porta mattis metus, quis pretium est vulputate a. Praesent congue tellus nec massa luctus, in dapibus arcu tincidunt. Etiam quis rutrum felis. Aliquam erat volutpat. Curabitur auctor vestibulum turpis sed viverra. Donec id rutrum magna. Donec id finibus orci. Morbi quis sollicitudin magna. Nunc eu pretium diam. Fusce venenatis pretium metus vitae rutrum. Praesent volutpat fermentum sapien a lacinia. Pellentesque nec orci sit amet justo condimentum vulputate.',
    tituloPolítica: 'Políticas de Privacidade',
    textoPolítica:
      'POLITICA Lorem ipsum dolor sit amet, dasconsectetur adipiscing elit. Morbi ipsum nibh, tincidunt at laoreet ac, bibendum non odio. Etiam quis tincidunt turpis, sed scelerisque nunc. Donec placerat justo at ornare blandit. Nulla pharetra justo et dolor varius condimentum. Ut nec condimentum quam. Duis rutrum purus in quam sagittis sagittis. Maecenas consectetur faucibus dolor a blandit. Sed vel risus eleifend, fermentum elit blandit, commodo nisi. Praesent a est ut tellus blandit porta eget porttitor mauris. Vivamus molestie libero nibh, in mattis libero viverra sit amet. Vestibulum tincidunt velit a arcu condimentum condimentum. Aenean congue semper ligula.Proin laoreet molestie molestie. Curabitur porta mattis metus, quis pretium est vulputate a. Praesent congue tellus nec massa luctus, in dapibus arcu tincidunt. Etiam quis rutrum felis. Aliquam erat volutpat. Curabitur auctor vestibulum turpis sed viverra. Donec id rutrum magna. Donec id finibus orci. Morbi quis sollicitudin magna. Nunc eu pretium diam. Fusce venenatis pretium metus vitae rutrum. Praesent volutpat fermentum sapien a lacinia. Pellentesque nec orci sit amet justo condimentum vulputate.',
  };
  return (
    <>
      <section className="ajuda">
        <div className="container">
          <div className="ajuda-container">
            <div className="ajuda-container__nav">
              <h1 id="ajuda">{ajuda.tituloPrincipal}</h1>

              {isLogado && isAdmin ? (
                <a href="/ajuda/editar" className="bt-edit">
                  Editar
                </a>
              ) : null}
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
