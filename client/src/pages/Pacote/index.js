import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { Link, useParams } from 'react-router-dom';
import AdicionaisPacote from '../../components/AdicionaisPacote';
import TravelImages from '../../components/TravelImages';

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

  const [pacote, setPacote] = useState();

  const { id } = useParams();
  const apiURL = 'http://localhost:3333/pacotes/' + id;
  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((res) =>
        setTimeout(() => {
          setPacote(res.pacote);
        }, 400),
      );
  }, []);
  const pacotes = [pacote];
  const idPacote = pacote?.id;
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
          {pacotes.map((Pacote, idx) => {
            return (
              <>
                <TravelImages pacote={Pacote} key={idx} />
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
              <p>{pacote.diarias} Di??rias</p>
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
                <p>Passagem A??rea</p>
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
                    Veja todos os benef??cios do pacote
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
                em at?? {pacote.parcelas}x de{' '}
                {valor(
                  (pacote.preco -
                    (pacote.preco * pacote.promocaoPorcentagem) / 100) /
                    pacote.parcelas,
                )}
              </p>
            </li>
          </ul>

          <input
            type="text"
            name="idPacote"
            id="idPacote"
            defaultValue={pacote.id}
            hidden
          />

          <Link
            className="Pacote__Button-Comprar"
            to="../../checkout"
            state={{ pacoteId: pacote.id }}
          >
            Comprar
          </Link>
        </aside>
        <article className="Pacote-Descricao-Sobre">
          <h1 className="Pacote-Decricao__Titulo">Sobre o Destino</h1>
          <p className="Pacote-Decricao__Paragrafo">{pacote.sobre}</p>
        </article>
        <article className="Pacote-Descricao-PontosTuristicos">
          <h1 className="Pacote-Decricao__Titulo">Pontos Tur??sticos</h1>
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
            <h1 className="tituloModal">Benef??cios do pacote</h1>
            {pacotes.map((Pacote, indexAdicionais) => {
              return (
                <>
                  <AdicionaisPacote pacote={Pacote} key={indexAdicionais} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pacote;
