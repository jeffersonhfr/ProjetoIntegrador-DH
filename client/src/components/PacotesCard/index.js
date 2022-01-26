import React from 'react';

const PacoteCard = ({ pacotes }) => {
  let valor = (valor) => {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <>
      {
        <>
          <li className="promo">
            <a href={`pacotes/${pacotes.id}`}>
              <img
                alt="Imagem do destino"
                src={pacotes.package_images[0].src}
              />
              <h2 className="Propriedade Nome">{pacotes.nomePacote}</h2>
              <ul className="Propriedades">
                <li className="Propriedade Hotel">
                  <p>
                    <img alt="Icone Calendario" src="assets/img/calendar.png" />
                    {pacotes.diarias} Diárias
                  </p>
                </li>
                <li className="Propriedade Hotel">
                  <p>
                    <img alt="Icone Check" src="assets/img/check.png" />
                    Hotel {pacotes.nomeHotel}
                  </p>
                </li>

                {pacotes.passagemAerea == true ? (
                  <>
                    <li className="Propriedade PassagemAerea">
                      <p>
                        <img alt="Icone Check" src="assets/img/check.png" />
                        Passagem Aérea
                      </p>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="Propriedade PassagemAerea">
                      <p>
                        <img alt="Icone Check" src="assets/img/notcheck.png" />
                        Passagem Aérea
                      </p>
                    </li>
                  </>
                )}

                <p>
                  <img alt="Icone Check" src="assets/img/check.png" />
                  {pacotes.adicional[0].nomeAdicional}
                </p>

                {pacotes.promocaoPorcentagem > 0 ? (
                  <>
                    <li className="Propriedade ValorInicial preco">
                      <h2>
                        A partir de <span> {valor(pacotes.preco)} </span>
                      </h2>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="Propriedade ValorInicial preco">
                      <h2>A partir de</h2>
                    </li>
                  </>
                )}

                <li className="Propriedade ValorPromocional preco">
                  <h1>
                    {valor(
                      pacotes.preco -
                        (pacotes.preco * pacotes.promocaoPorcentagem) / 100,
                    )}
                  </h1>
                </li>
                <h2 className="emAte">
                  em até {pacotes.parcelas}x no cartão de crédito
                </h2>
              </ul>
            </a>
          </li>
        </>
      }
    </>
  );
};
export default PacoteCard;
