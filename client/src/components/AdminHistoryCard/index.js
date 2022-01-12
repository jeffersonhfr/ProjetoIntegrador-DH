import React from 'react';

const AdminHistoryCard = ({ orders }) => {
  let valor = (valor) => {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };
  return (
    <>
      <div class="cartoes-historico">
        <div class="cartoes-historico cartoes-historico__content">
          <div class="cartoes-historico__imagem-box">
            <img
              alt="Imagem do destino"
              src={imagens.src}
              class="cartoes-historico__imagem"
            />
          </div>
          <div class="cartoes-historico__detalhes-box">
            <h2 class="cartoes-historico__titulo">
              {orders.pacote.nomePacote}
            </h2>
            <h3 class="cartoes-historico__detalhes">
              <span>Valor da Viagem:</span>
              {valor(orders.valor)}
            </h3>
            <h3 class="cartoes-historico__detalhes">
              <span>Usuario:</span>
              {orders.usuario.nome} - {orders.usuario.email}
            </h3>
            <h3 class="cartoes-historico__detalhes">
              <span>Status:</span>

              {orders.pedidoAtivo == false ? (
                <>Pedido Cancelado</>
              ) : (
                <>{orders.status}</>
              )}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminHistoryCard;
