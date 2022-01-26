import React from 'react';

const AdicionaisPacote = ({ pacote }) => {
  return (
    <>
      {pacote.adicional.map((adicional) => {
        return (
          <>
            <li className="Pacote-Propriedades__Item Bonus liModal">
              <img
                className="Pacote-Propriedades__Item-Img"
                src="/assets/img/check.png"
              />
              <p>{adicional.nomeAdicional}</p>
            </li>
          </>
        );
      })}
    </>
  );
};
export default AdicionaisPacote;
