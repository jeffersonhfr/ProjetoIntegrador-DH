import React from "react";
import Footer from "../../components/Footer";

let pacotes = [
  {
    nomePacote: "Egito Histórico",
    nomeHotel: "Marriott Mena House",
    diarias: 10,
    passagemAerea: 1,
    nacional: 0,
    preco: 18800.0,
    promocaoPorcentagem: 30,
    parcelas: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    sobre:
      "Com vista das Grandes Pirâmides de Gizé, o Marriott Mena House, Cairo está rodeado por 16 hectares de jardins verdes e possui spa, academia e piscina. Os quartos são decorados com móveis artesanais.Todas as acomodações no Marriott Mena House, Cairo dispõem de ar-condicionado, tecidos luxuosos, área de estar e TV LCD. Cada quarto e suíte oferece um banheiro privativo espaçoso com roupão de banho e chinelos. O café da manhã é servido na sala de refeições com vista do jardim. As opções gastronômicas incluem especialidades italianas no Restaurante Alfredo, enquanto o buffet de café da manhã diário é servido no 139 Pavilion, que também conta com coquetéis e vista inesquecível. As instalações de lazer incluem uma piscina aquecida, situada nos jardins paisagísticos. As Pirâmides de Gizé ficam a menos de 500 metros do Marriott Mena House. O concierge poderá organizar passeios de cavalos e camelos para as pirâmides. O Aeroporto do Cairo está a 30,6 km do local.Casais particularmente gostam da localização — eles deram nota 9,5 para viagem a dois.",
    pontoTuristico:
      "Para quem procura por experiências marcantes e inesquecíveis durante as férias uma  viagem para o Egito é a resposta. O país localizado no nordeste da África possui uma história riquíssima e monumentos grandiosos – não à toa está presente em quase todos os livros de história.O Egito fica a mais de 10 mil quilômetros de distância do Brasil, os voos saindo de São Paulo costumam ter pelo menos uma escala e a viagem mais rápida demora cerca de 17h 30m. Como a conexão é feita em cidades como Istambul e Dubai, muitos turistas aproveitam para conhecê-las também.No país africano as principais cidades a serem visitadas são a capital Cairo, Luxor, Aswan e Sharm el Sheikh. Cada uma delas possui características particulares e pontos turísticos de visita obrigatória que vão além de templos e sarcófagos. Conheça alguns deles. Pirâmides de Gizé (Cairo) Essa é o ponto turístico mais conhecido do Cairo e de todo o Egito. Um dos mais antigos monumentos, o conjunto Pirâmides de Gizé fica a 18 km da capital e o acesso é fácil. Agências de turismo oferecem passeios diurnos e noturnos, esse último inclui um espetáculo de luzes e som. As principais pirâmides em que faraós foram mumificados e sepultados são as de Quéops, Quéfren e Miquerinos. A primeira é a maior delas, com 140 metros de altura e 230 metros de base. Além delas, a Grande Esfinge chama atenção. Khan el-Khalili Bazaar (Cairo) A antiga área comercial fica no coração de Cairo e é um grande bazar a céu aberto que reúne cafés, restaurantes e lojas de especiarias, joias, tecidos, artesanatos, perfumes, alimentos, entre outros. Além de ser uma forma de mergulhar na cultura local, visitar as ruelas do Khan el-Khalili Bazaar também é viver a história, já que o local, fundado no século XIV, transformou Cairo em um centro importante do comércio ao permitir comerciantes estrangeiros exporem suas mercadorias. O Khan el-Khalili Bazaar está incluso em vários pacotes de turismo oferecidos por agências – inclusive, essa é a melhor forma de conhecer o local sem se perder. O pacote da Memphis Tours, por exemplo, disponibiliza guias que falam a língua portuguesa, o que torna o passeio ainda mais proveitoso.",
    createdAt: new Date(),
    updatedAt: new Date(),
    package_Images: [
      {
        src: "/assets/img/package/Egito.jpg",
      },
      {
        src: "/assets/img/package/Egito1.jpg",
      },
      {
        src: "/assets/img/package/Egito2.jpg",
      },
      {
        src: "/assets/img/package/Egito3.jpg",
      },
      {
        src: "/assets/img/package/Egito4.jpg",
      },
      {
        src: "/assets/img/package/Egito5.jpg",
      },
      {
        src: "/assets/img/package/Egito6.jpg",
      },
    ],
    adicional: [
      {
        nomeAdicional: "City Tour",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nomeAdicional: "Hotel com Piscina Aquecida",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nomeAdicional: "Jantar no Palácio Real",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nomeAdicional: "Entradas para Museus",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nomeAdicional: "Passeio de Camelo",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nomeAdicional: "Wi-fi Grátis",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nomeAdicional: "Café da Manhã",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nomeAdicional: "Refeição Completa",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  },
];

const CheckoutSucesso = () => {
  return (
    <>
      <main className="container container-checkout">
        <div className="titulo-checkout">
          <h1>Minha Compra</h1>
        </div>
        <div className="pagamento__box">
          <div className="pagamento__box__content">
            <div className="pagamento__box__imagem">
              <img src={pacotes[0].package_Images[0].src} alt="" width="100%" />
            </div>
            <div className="pagamento__box__detalhes pagamento__box__sucesso">
              <ul>
                <li>
                  <h2 className="pagamento__box__detalhes__titulo">
                    Compra realizada com sucesso!
                  </h2>
                </li>
                <li>
                  <p className="pagamento__box__detalhes__paragrafo">
                    Para maiores informações acesse o painel minhas viagens
                  </p>
                </li>
                {/* if(locals.pagamento) {  */}
                <br />
                <li>
                  <a href="#">
                    <span className="pagamento-link">Clique aqui</span>
                  </a>
                  para imprimir o seu boleto
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default CheckoutSucesso;
