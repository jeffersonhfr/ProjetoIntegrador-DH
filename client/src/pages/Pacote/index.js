import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { useParams } from 'react-router-dom';
import TravelImages from '../../components/TravelImages';
import AdicionaisPacote from '../../components/AdicionaisPacote';

const Pacote = () => {
  function openModal() {
    document.getElementById('modal').classList.add('modal-active');
    document.body.classList.add('scrollNone');
  }

  function closeModal() {
    document.getElementById('modal').classList.remove('modal-active');
    document.body.classList.remove('scrollNone');
  }

  let valor = (valor) => {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  let pack = [
    {
      package_images: [
        {
          src: '/assets/img/package/Egito.jpg',
        },
        {
          src: '/assets/img/package/Egito1.jpg',
        },
        {
          src: '/assets/img/package/Egito2.jpg',
        },
        {
          src: '/assets/img/package/Egito3.jpg',
        },
        {
          src: '/assets/img/package/Egito4.jpg',
        },
        {
          src: '/assets/img/package/Egito5.jpg',
        },
        {
          src: '/assets/img/package/Egito6.jpg',
        },
      ],
      adicional: [
        {
          nomeAdicional: 'City Tour',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomeAdicional: 'Hotel com Piscina Aquecida',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomeAdicional: 'Jantar no Palácio Real',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomeAdicional: 'Entradas para Museus',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomeAdicional: 'Passeio de Camelo',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomeAdicional: 'Wi-fi Grátis',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomeAdicional: 'Café da Manhã',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomeAdicional: 'Refeição Completa',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    },
  ];

  const [pacote, setPacote] = useState();

  const { id } = useParams();
  const apiURL = 'http://localhost:3333/pacotes/' + id;
  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((res) =>
        setTimeout(() => {
          setPacote(res.pacote[0]);
        }, 1500),
      );
  }, []);

  console.log(pacote);
  const pacotes = [pacote];
  console.log(pacotes);

  return !pacote ? (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 300,
        }}
      >
        <ReactLoading
          type={'bars'}
          color={'#3E60BF'}
          height={120}
          width={120}
        />
      </div>
    </>
  ) : (
    <>
      <div className="Pacote">
        <article className="Pacote-TitleContainer">
          {pacote.nacional == true ? (
            <h2 className="Pacote-TitleContainer__Subtitle">Pacote Nacional</h2>
          ) : (
            <h2 className="Pacote-TitleContainer__Subtitle">
              Pacote Internacional
            </h2>
          )}

          <h1 className="Pacote-TitleContainer__Title">{pacote.nomePacote}</h1>
        </article>
        <nav className="Pacote-ImgContainer">
          {pacotes.map((Pacote) => {
            return (
              <>
                <TravelImages pacote={Pacote} />
              </>
            );
          })}
        </nav>
        <aside className="info_container">
          <ul className="Pacote-Propriedades">
            <li className="Pacote-Propriedades__Item Titulo">
              <h1>{pacote.nomePacote}</h1>
            </li>
            <li className="Pacote-Propriedades__Item Dias">
              <img
                className="Pacote-Propriedades__Item-Img"
                src="/assets/img/calendar.png"
              />
              <p>{pacote.diarias} Diárias</p>
            </li>
            <li className="Pacote-Propriedades__Item Hotel">
              <img
                className="Pacote-Propriedades__Item-Img"
                src="/assets/img/check.png"
              />
              <p>Hotel {pacote.nomeHotel}</p>
            </li>
            {pacote.passagemAerea == true ? (
              <li className="Pacote-Propriedades__Item PassagemAerea">
                <img
                  className="Pacote-Propriedades__Item-Img"
                  src="/assets/img/check.png"
                />
                <p>Passagem Aérea</p>
              </li>
            ) : null}
            {pacote.adicional[0] ? (
              <li className="Pacote-Propriedades__Item Bonus">
                <img
                  className="Pacote-Propriedades__Item-Img"
                  src="/assets/img/check.png"
                />
                <p>{pacote.adicional[0].nomeAdicional}</p>
              </li>
            ) : null}
            {pacote.adicional[1] ? (
              <li className="Pacote-Propriedades__Item Bonus">
                <img
                  className="Pacote-Propriedades__Item-Img"
                  src="/assets/img/check.png"
                />
                <p>{pacote.adicional[1].nomeAdicional}</p>
              </li>
            ) : null}
            {pacote.adicional[2] ? (
              <li className="Pacote-Propriedades__Item Bonus">
                <img
                  className="Pacote-Propriedades__Item-Img"
                  src="/assets/img/check.png"
                />
                <p>{pacote.adicional[2].nomeAdicional}</p>
              </li>
            ) : null}
            {pacote.adicional[3] ? (
              <li className="Pacote-Propriedades__Item todosBonus">
                <p>
                  <a onClick={openModal} className="link-beneficios">
                    Veja todos os benefícios do pacote
                  </a>
                </p>
              </li>
            ) : null}
            {pacote.promocaoPorcentagem > 0 ? (
              <li className="Pacote-Propriedades__Item__Valor">
                <h2 className="Pacote-Propriedades__Item__Valor-Inicial">
                  {valor(pacote.preco)}
                </h2>
              </li>
            ) : (
              <li className="Pacote-Propriedades__Item__Valor">
                <h2 className="Pacote-Propriedades__Item__Valor-Inicial"> </h2>
              </li>
            )}
            <li className="Pacote-Propriedades__Item__Valor">
              <h1 className="Pacote-Propriedades__Item__Valor-Promocional">
                {valor(
                  pacote.preco -
                    (pacote.preco * pacote.promocaoPorcentagem) / 100,
                )}
              </h1>
              <p>
                em até {pacote.parcelas}x de{' '}
                {valor(
                  (pacote.preco -
                    (pacote.preco * pacote.promocaoPorcentagem) / 100) /
                    pacote.parcelas,
                )}
              </p>
            </li>
          </ul>
          <form action="../checkout" method="post" className="btao-form">
            <input
              type="text"
              name="origem"
              id="origem"
              defaultValue="{ origem }"
              hidden
            />

            <input
              type="text"
              name="idPacote"
              id="idPacote"
              defaultValue="{ pacote.id }"
              hidden
            />

            <button type="submit" className="Pacote__Button-Comprar">
              Comprar
            </button>
          </form>
        </aside>
        <article className="Pacote-Descricao-Sobre">
          <h1 className="Pacote-Decricao__Titulo">Sobre o Destino</h1>
          <p className="Pacote-Decricao__Paragrafo">{pacote.sobre}</p>
        </article>
        <article className="Pacote-Descricao-PontosTuristicos">
          <h1 className="Pacote-Decricao__Titulo">Pontos Turísticos</h1>
          <p className="Pacote-Decricao__Paragrafo">{pacote.pontoTuristico}</p>
        </article>
      </div>

      <div className="modal" id="modal">
        <div className="modal-box">
          <div className="btn-fecharModal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-lg btn-fecharModal"
              viewBox="0 0 16 16"
              onClick={closeModal}
            >
              <path
                fill="evenodd"
                d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
              />
              <path
                fill="evenodd"
                d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
              />
            </svg>
          </div>
          <div className="modal-conteudo">
            <h1 className="tituloModal">Benefícios do pacote</h1>
            {pacotes.map((Pacote) => {
              return (
                <>
                  <AdicionaisPacote pacote={Pacote} />
                </>
              );
            })}
            {/* {adicionais.map(() => {
              return (
                <>
                  <li className="Pacote-Propriedades__Item Bonus liModal">
                    <img
                      className="Pacote-Propriedades__Item-Img"
                      src="/assets/img/check.png"
                    />
                    <p>1</p>
                  </li>
                </>
              );
            })} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pacote;
