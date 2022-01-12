import React from 'react';

const HistoryCard = ({ orders }) => {
  let valor = (valor) => {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };
  return (
    <>
      <div className="cartoes-historico">
        <div className="cartoes-historico cartoes-historico__content">
          <div className="cartoes-historico__imagem-box">
            <img
              alt="Imagem do destino"
              src={orders.imagens.src}
              className="cartoes-historico__imagem"
            />
          </div>
          <div className="cartoes-historico__detalhes-box">
            <h2 className="cartoes-historico__titulo">
              {orders.pacote.nomePacote}
            </h2>
            <h3 className="cartoes-historico__detalhes">
              <span>Valor da Viagem:</span>
              {valor(orders.valor)}
            </h3>
            <h3 className="cartoes-historico__detalhes">
              <span>Parcelado em:</span>
              {orders.parcelamento}x de{' '}
              {valor(orders.valor / orders.parcelamento)}
            </h3>
            <h3 className="cartoes-historico__detalhes">
              <span>Status:</span>
              {orders.pedidoAtivo == false ? (
                <>Pedido Cancelado</>
              ) : (
                <>{orders.status}</>
              )}
            </h3>
          </div>
          <div className="cartoes-historico__botoes-box">
            <a href="/minhas-viagens/<%= orders[i].id %>">
              <button className="cartoes-historico__botoes">
                Ver Detalhes
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default HistoryCard;
