import React from 'react';

const AdicionaisPacote = ({ pacote, indexAdicionais }) => {
  return (
    <>
      {indexAdicionais}
      {pacote.adicional.map((adicional, indexAdicionaisItens) => {
        return (
          <>
            {indexAdicionaisItens}
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
