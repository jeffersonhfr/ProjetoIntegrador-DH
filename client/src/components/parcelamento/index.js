import React from 'react';

const Parcelamento = ({ parcela, i, parcelaN, pacote }) => {
  let valor = (valor) => {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };
  const parcelaNumero = parcelaN + 1;

  const onTrigger = (event) => {
    this.props.parentCallback('Data from child');
    console.log('teste');
    console.log('teste');
    console.log('teste');
    event.preventDefault();
  };

  return (
    <>
      {
        <option
          defaultValue="parcelas"
          value={parcelaNumero}
          onClick={onTrigger}
        >
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
