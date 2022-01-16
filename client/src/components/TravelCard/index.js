import React, { useState } from 'react';

const TravelCard = ({ pacotes }) => {
  let valor = (valor) => {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const [isLogado, setIsLogado] = useState(true);
  const [isAdmin, setIsAdmin] = useState(true);

  const openModal = () => {
    document.getElementById('modal').classList.add('modal-active');
    document.body.classList.add('scrollNone');
  };

  const closeModal = () => {
    document.getElementById('modal').classList.remove('modal-active');
    document.body.classList.remove('scrollNone');
  };

  return (
    <>
      <div className="travel-card travel-card__content">
        <div className="travel-card__imagem-box">
          <img
            className="travel-card__imagem"
            alt="Imagem do destino"
            src={pacotes.package_Images[0].src}
          />
        </div>
        <div className="travel-card__info-box">
          <div className="travel-card__infoDesc">
            <h2 className="Propriedade Nome">{pacotes.nomePacote}</h2>
            <ul className="Propriedades">
              <li className="Propriedade Hotel">
                <p>
                  <img alt="Icone Calendario" src="/assets/img/calendar.png" />
                  {pacotes.diarias} diárias
                </p>
              </li>
              <li className="Propriedade Hotel">
                <p>
                  <img alt="Icone Check" src="/assets/img/check.png" />
                  Hotel {pacotes.nomeHotel}
                </p>
              </li>

              {pacotes.passagemAerea == true ? (
                <p>
                  <img alt="Icone Check" src="/assets/img/check.png" />
                  Passagem Aérea
                </p>
              ) : (
                <p>
                  <img alt="Icone Check" src="/assets/img/notcheck.png" />
                  Passagem Aérea
                </p>
              )}

              {pacotes.adicionais[0] ? (
                <li className="Propriedade Bonus">
                  <p>
                    <img alt="Icone Check" src="/assets/img/check.png" />
                    {pacotes.adicionais[0].nomeAdicional}
                  </p>
                </li>
              ) : null}
            </ul>
          </div>
          <div>
            <div className="travel-card__infoPrice">
              <li className="Propriedade ValorInicial preco">
                {pacotes.promocaoPorcentagem > 0 ? (
                  <>
                    <h3>
                      A partir de
                      <span className="tachado">{valor(pacotes.preco)}</span>
                    </h3>
                  </>
                ) : (
                  <>
                    <h3>A partir de</h3>
                  </>
                )}
              </li>
              <li className="Propriedade ValorPromocional preco">
                <h1>
                  {valor(
                    pacotes.preco -
                      (pacotes.preco * pacotes.promocaoPorcentagem) / 100,
                  )}
                </h1>
              </li>
              <h3 className="emAte">
                em até {pacotes.parcelas}x no cartão de crédito
              </h3>
            </div>
            <a href={'/pacotes/' + pacotes.id}>
              <button className="btao-pacote">Detalhes</button>
            </a>
          </div>
        </div>
        {isLogado && isAdmin ? (
          <div className="btao-Container">
            <a href={'pacotes/' + pacotes.id + '/edit'} className="btao-form">
              <button className="btao-Container__btao-editar listarPacotes">
                <i className="bi bi-pencil-fill"></i>
              </button>
            </a>
            <a onClick={openModal} className="btao-form">
              <button className="btao-Container__btao-deletar listarPacotes">
                <i className="bi bi-trash-fill"></i>
              </button>
            </a>
          </div>
        ) : null}
      </div>

      <div className="modal" id="modal">
        <div className="modal-alert">
          <div className="modal-conteudo">
            <h1 className="tituloModal tituloAlert">
              Deseja realmente excluir {pacotes.nomePacote}?
            </h1>
            <form action={'pacotes/' + pacotes.id + '/delete'} method="POST">
              <button type="submit" className="btao-pacote btn-alert">
                Sim
              </button>
              <a onClick={closeModal} className="btao-pacote btn-cancel">
                Não
              </a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default TravelCard;
