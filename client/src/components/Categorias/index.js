import React, { useEffect, useState } from 'react';

import Categoria from '../Categoria';
import CarouselButton from '../CarouselButton';
import { api } from '../../api';

const Categorias = () => {
  let buttonPrevCat = {
    position: 'absolute',
    left: '38px',
    top: '707px',
  };
  let buttonNextCat = {
    position: 'absolute',
    transform: 'scalex(-1)',
    right: '38px',
    top: '707px',
  };

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    api
      .get('/categorias')
      .then((res) => setCategorias(res.data.categorias))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="container">
        <nav className="Categoria viagem-tematica">
          <article>
            <h1 className="title"> Viagens Temáticas</h1>
            <h2>
              Separamos os melhores pacotes por temas, escolha o que faz mais o
              seu estilo
            </h2>
          </article>

          <div className="container container-cards">
            <CarouselButton
              style={buttonPrevCat}
              classe="itemsTema"
              isPrev={false}
            />
            <ul className=" Main ViagensTematicas itemsTema">
              {categorias.map((categorias, idx) => (
                <Categoria categoria={categorias} key={idx} />
              ))}
            </ul>
            <CarouselButton
              style={buttonNextCat}
              classe="itemsTema"
              isPrev={true}
            />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Categorias;
