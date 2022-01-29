import React, { useEffect, useState } from 'react';
import PacoteCard from '../PacotesCard';

const Promocoes = () => {
  const [pacotes, setPacotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3333/pacotes')
      .then((res) => res.json())
      .then((res) => setPacotes(res.pacotes));
  }, []);
  return (
    <>
      <div className="container container-cards">
        <nav className="Categoria categoria-promocional">
          <article>
            <h1>Pacotes Promocionais</h1>
            <h2>
              Confira nossos pacotes Promocionais e embarque na sua próxima
              viagem
            </h2>
          </article>
          <ul className="Main PacotesPromocionais ExibeIcone itemsPromo">
            {pacotes.map((pacotes, idx) => (
              <PacoteCard pacotes={pacotes} key={idx} />
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Promocoes;
