import React from 'react';

const Parcelamento = ({ parcela, i, parcelaN, pacote }) => {
  let valor = (valor) => {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };
  const parcelaNumero = parcelaN + 1;
  return (
    <>
      {
        <option defaultValue="parcelas">
          {parcelaNumero} x {''}
          {valor(
            (pacote.preco - (pacote.preco * pacote.promocaoPorcentagem) / 100) /
              parcelaNumero,
          )}
        </option>
      }
    </>
  );
};
export default Parcelamento;
