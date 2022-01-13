import React, { useState } from 'react';
import Header from '../../components/Header';
import TravelImages from '../../components/TravelImages';
import Footer from '../../components/Footer';

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
      nomePacote: 'Egito Histórico',
      nomeHotel: 'Marriott Mena House',
      diarias: 10,
      passagemAerea: 1,
      nacional: 0,
      preco: 18800.0,
      promocaoPorcentagem: 30,
      parcelas: 10,
      sobre:
        'Com vista das Grandes Pirâmides de Gizé, o Marriott Mena House, Cairo está rodeado por 16 hectares de jardins verdes e possui spa, academia e piscina. Os quartos são decorados com móveis artesanais.Todas as acomodações no Marriott Mena House, Cairo dispõem de ar-condicionado, tecidos luxuosos, área de estar e TV LCD. Cada quarto e suíte oferece um banheiro privativo espaçoso com roupão de banho e chinelos. O café da manhã é servido na sala de refeições com vista do jardim. As opções gastronômicas incluem especialidades italianas no Restaurante Alfredo, enquanto o buffet de café da manhã diário é servido no 139 Pavilion, que também conta com coquetéis e vista inesquecível. As instalações de lazer incluem uma piscina aquecida, situada nos jardins paisagísticos. As Pirâmides de Gizé ficam a menos de 500 metros do Marriott Mena House. O concierge poderá organizar passeios de cavalos e camelos para as pirâmides. O Aeroporto do Cairo está a 30,6 km do local.Casais particularmente gostam da localização — eles deram nota 9,5 para viagem a dois.',
      pontoTuristico:
        'Para quem procura por experiências marcantes e inesquecíveis durante as férias uma  viagem para o Egito é a resposta. O país localizado no nordeste da África possui uma história riquíssima e monumentos grandiosos – não à toa está presente em quase todos os livros de história.O Egito fica a mais de 10 mil quilômetros de distância do Brasil, os voos saindo de São Paulo costumam ter pelo menos uma escala e a viagem mais rápida demora cerca de 17h 30m. Como a conexão é feita em cidades como Istambul e Dubai, muitos turistas aproveitam para conhecê-las também.No país africano as principais cidades a serem visitadas são a capital Cairo, Luxor, Aswan e Sharm el Sheikh. Cada uma delas possui características particulares e pontos turísticos de visita obrigatória que vão além de templos e sarcófagos. Conheça alguns deles. Pirâmides de Gizé (Cairo) Essa é o ponto turístico mais conhecido do Cairo e de todo o Egito. Um dos mais antigos monumentos, o conjunto Pirâmides de Gizé fica a 18 km da capital e o acesso é fácil. Agências de turismo oferecem passeios diurnos e noturnos, esse último inclui um espetáculo de luzes e som. As principais pirâmides em que faraós foram mumificados e sepultados são as de Quéops, Quéfren e Miquerinos. A primeira é a maior delas, com 140 metros de altura e 230 metros de base. Além delas, a Grande Esfinge chama atenção. Khan el-Khalili Bazaar (Cairo) A antiga área comercial fica no coração de Cairo e é um grande bazar a céu aberto que reúne cafés, restaurantes e lojas de especiarias, joias, tecidos, artesanatos, perfumes, alimentos, entre outros. Além de ser uma forma de mergulhar na cultura local, visitar as ruelas do Khan el-Khalili Bazaar também é viver a história, já que o local, fundado no século XIV, transformou Cairo em um centro importante do comércio ao permitir comerciantes estrangeiros exporem suas mercadorias. O Khan el-Khalili Bazaar está incluso em vários pacotes de turismo oferecidos por agências – inclusive, essa é a melhor forma de conhecer o local sem se perder. O pacote da Memphis Tours, por exemplo, disponibiliza guias que falam a língua portuguesa, o que torna o passeio ainda mais proveitoso.',
      createdAt: new Date(),
      updatedAt: new Date(),
      package_Images: [
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
  return (
    <>
      
      <div className="Pacote">
        <article className="Pacote-TitleContainer">
          {pack[0].nacional == true ? (
            <h2 className="Pacote-TitleContainer__Subtitle">Pacote Nacional</h2>
          ) : (
            <h2 className="Pacote-TitleContainer__Subtitle">
              Pacote Internacional
            </h2>
          )}

          <h1 className="Pacote-TitleContainer__Title">{pack[0].nomePacote}</h1>
        </article>
        <nav className="Pacote-ImgContainer">
          {pack.map((Pacotes) => {
            return (
              <>
                <TravelImages pacotes={Pacotes} />
              </>
            );
          })}
        </nav>
        <aside className="info_container">
          <ul className="Pacote-Propriedades">
            <li className="Pacote-Propriedades__Item Titulo">
              <h1>{pack[0].nomePacote}</h1>
            </li>
            <li className="Pacote-Propriedades__Item Dias">
              <img
                className="Pacote-Propriedades__Item-Img"
                src="/assets/img/calendar.png"
              />
              <p>{pack[0].diarias} Diárias</p>
            </li>
            <li className="Pacote-Propriedades__Item Hotel">
              <img
                className="Pacote-Propriedades__Item-Img"
                src="/assets/img/check.png"
              />
              <p>Hotel {pack[0].nomeHotel}</p>
            </li>
            {pack[0].passagemAerea == true ? (
              <li className="Pacote-Propriedades__Item PassagemAerea">
                <img
                  className="Pacote-Propriedades__Item-Img"
                  src="/assets/img/check.png"
                />
                <p>Passagem Aérea</p>
              </li>
            ) : null}
            {pack[0].adicional[0] ? (
              <li className="Pacote-Propriedades__Item Bonus">
                <img
                  className="Pacote-Propriedades__Item-Img"
                  src="/assets/img/check.png"
                />
                <p>{pack[0].adicional[0].nomeAdicional}</p>
              </li>
            ) : null}
            {pack[0].adicional[1] ? (
              <li className="Pacote-Propriedades__Item Bonus">
                <img
                  className="Pacote-Propriedades__Item-Img"
                  src="/assets/img/check.png"
                />
                <p>{pack[0].adicional[1].nomeAdicional}</p>
              </li>
            ) : null}
            {pack[0].adicional[2] ? (
              <li className="Pacote-Propriedades__Item Bonus">
                <img
                  className="Pacote-Propriedades__Item-Img"
                  src="/assets/img/check.png"
                />
                <p>{pack[0].adicional[2].nomeAdicional}</p>
              </li>
            ) : null}
            {pack[0].adicional[3] ? (
              <li className="Pacote-Propriedades__Item todosBonus">
                <p>
                  <a onClick={openModal} className="link-beneficios">
                    Veja todos os benefícios do pacote
                  </a>
                </p>
              </li>
            ) : null}
            {pack[0].promocaoPorcentagem > 0 ? (
              <li className="Pacote-Propriedades__Item__Valor">
                <h2 className="Pacote-Propriedades__Item__Valor-Inicial">
                  {valor(pack[0].preco)}
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
                  pack[0].preco -
                    (pack[0].preco * pack[0].promocaoPorcentagem) / 100,
                )}
              </h1>
              <p>
                em até {pack[0].parcelas}x de{' '}
                {valor(
                  (pack[0].preco -
                    (pack[0].preco * pack[0].promocaoPorcentagem) / 100) /
                    pack[0].parcelas,
                )}
              </p>
            </li>
          </ul>
          <form action="../checkout" method="post" className="btao-form">
            <input
              type="text"
              name="origem"
              id="origem"
              value="{ origem }"
              hidden
            />

            <input
              type="text"
              name="idPacote"
              id="idPacote"
              value="{ pack[0].id }"
              hidden
            />

            <button type="submit" className="Pacote__Button-Comprar">
              Comprar
            </button>
          </form>
        </aside>
        <article className="Pacote-Descricao-Sobre">
          <h1 className="Pacote-Decricao__Titulo">Sobre o Destino</h1>
          <p className="Pacote-Decricao__Paragrafo">{pack[0].sobre}</p>
        </article>
        <article className="Pacote-Descricao-PontosTuristicos">
          <h1 className="Pacote-Decricao__Titulo">Pontos Turísticos</h1>
          <p className="Pacote-Decricao__Paragrafo">{pack[0].pontoTuristico}</p>
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
                fill-rule="evenodd"
                d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
              />
              <path
                fill-rule="evenodd"
                d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
              />
            </svg>
          </div>
          <div className="modal-conteudo">
            <h1 className="tituloModal">Benefícios do pacote</h1>

            {pack.map((pack) => {
              return (
                <>
                  <li className="Pacote-Propriedades__Item Bonus liModal">
                    <img
                      className="Pacote-Propriedades__Item-Img"
                      src="/assets/img/check.png"
                    />
                    <p>{pack.adicional.nomeAdicional}</p>
                  </li>
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
