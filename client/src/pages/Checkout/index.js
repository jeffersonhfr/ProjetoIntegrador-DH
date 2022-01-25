import React, { useState } from "react";

const Checkout = () => {
  let valor = (valor) => {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };
  const [isCartao, setCartao] = useState(false);
  const [isBoleto, setBoleto] = useState(false);
  const [isHr, setHr] = useState(false);

  const checkoutCartao = () => {
    setCartao(true);
    setBoleto(false);
    setHr(false);
  };
  const checkoutBoleto = () => {
    setBoleto(true);
    setCartao(false);
    setHr(true);
  };

  function addBoleto() {
    document.querySelector("#nomecartao").required = false;
    document.querySelector("#numerocartao").required = false;
    document.querySelector("#parcelas").required = false;
  }

  function addCartao() {
    document.querySelector("#nomecartao").required = true;
    document.querySelector("#numerocartao").required = true;
    document.querySelector("#parcelas").required = true;
  }

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
  return (
    <>
      <main className="container container-checkout">
        <div className="titulo-checkout">
          <h1>Minha Compra</h1>
        </div>
        <form action="/checkout/sucesso" method="POST">
          <div className="pagamento__box">
            <div className="pagamento__box__content">
              <div className="pagamento__box__imagem">
                <img
                  src={pacotes[0].package_Images[0].src}
                  alt=""
                  width="100%"
                />
                <input
                  type="text"
                  name="imagem"
                  id="imagem"
                  defaultValue={pacotes[0].package_Images[0].src}
                  hidden
                />
              </div>
              <div className="pagamento__box__detalhes">
                <ul>
                  <li>
                    <h2 className="pagamento__box__detalhes__titulo">
                      Pacote:
                    </h2>
                    <span>{pacotes[0].nomePacote}</span>
                  </li>
                  <li>
                    <h2 className="pagamento__box__detalhes__titulo">Valor:</h2>
                    <span>
                      <input
                        type="text"
                        name="valorPago"
                        id="valorPago"
                        defaultValue={
                          pacotes[0].preco -
                          (pacotes[0].preco * pacotes[0].promocaoPorcentagem) /
                            100
                        }
                        hidden
                      />
                      {valor(
                        pacotes[0].preco -
                          (pacotes[0].preco * pacotes[0].promocaoPorcentagem) /
                            100
                      )}
                    </span>
                  </li>
                  <li>
                    <h2 className="pagamento__box__detalhes__titulo pagamento__box__detalhes__titulo--pagamento">
                      Forma de Pagamento:
                    </h2>
                  </li>
                  <li className="metodo__pagamento">
                    <div className="metodo__pagamento__item">
                      <img
                        className="metodo__pagamento__icone"
                        src="assets/img/boletoBancario.png"
                        alt="Boleto Bancário"
                      />
                      <input
                        className="metodo__pagamento__input"
                        type="radio"
                        id="boletoBancario"
                        name="pagamento"
                        defaultValue="Boleto Bancário"
                        required="required"
                        onClick={addBoleto}
                        onClick={checkoutBoleto}
                      />
                      <label>Boleto Bancário</label>
                    </div>
                    <div className="metodo__pagamento__item">
                      <input
                        className="metodo__pagamento__input"
                        type="radio"
                        id="cartaoCredito"
                        name="pagamento"
                        defaultValue="Cartão de Crédito"
                        onClick={addCartao}
                        onClick={checkoutCartao}
                      />
                      <label> Cartão de Crédito </label>
                      <img
                        className="metodo__pagamento__icone"
                        src="assets/img/cartaoCredito.png"
                        alt="Cartão de Crédito"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className={isBoleto ? "mostrar" : "metodo__pagamento__boleto"}
            ></div>
            <hr className={isHr ? "mostrar" : "metodo__pagamento__divisao"} />
            <div className={isCartao ? "mostrar" : "metodo__pagamento__cartao"}>
              <div className="metodo__pagamento__cartao-itens">
                <label className="label-checkout">Nome no Cartão:</label>
                <br />
                <input type="text" id="nomecartao" name="nomecartao" />
              </div>

              <div className="metodo__pagamento__cartao-itens">
                <label className="label-checkout">Número do Cartão:</label>
                <br />
                <input type="number" id="numerocartao" name="numerocartao" />
              </div>

              <div className="metodo__pagamento__cartao-itens">
                <label className="label-checkout">Opções de Parcelas:</label>
                <br />
                <select name="parcelas" id="parcelas">
                  {pacotes[0].parcelas.map((parcelas) => (
                    <option defaultValue="parcelas">
                      {
                        (pacotes[0].parcelas,
                        valor(
                          (pacotes[0].preco -
                            (pacotes[0].preco *
                              pacotes[0].promocaoPorcentagem) /
                              100) /
                            parcelas
                        ))
                      }
                    </option>
                  ))}
                </select>
              </div>

              <div className="metodo__pagamento__cartao-itens">
                <label className="label-checkout">Validade (MM/AA):</label>
                <br />

                <div className="cartao__dados">
                  <div className="cartao__mes">
                    <select name="mes" id="mes">
                      <option>Mês</option>
                      <option defaultValue="01">01 - Janeiro</option>
                      <option defaultValue="02">02 -Fevereiro</option>
                      <option defaultValue="03">03 - Março</option>
                      <option defaultValue="04">04 - Abril</option>
                      <option defaultValue="05">05 - Maio</option>
                      <option defaultValue="06">06 - Junho</option>
                      <option defaultValue="07">07 - Julho</option>
                      <option defaultValue="08">08 - Agosto</option>
                      <option defaultValue="09">09 - Setembo</option>
                      <option defaultValue="10">10 - Outubro</option>
                      <option defaultValue="11">11 - Novembro</option>
                      <option defaultValue="12">12 - Dezembro</option>
                    </select>
                  </div>

                  <div className="cartao__ano">
                    <select name="ano" id="ano">
                      <option>Ano</option>
                      <option defaultValue="2021">2021</option>
                      <option defaultValue="2022">2022</option>
                      <option defaultValue="2023">2023</option>
                      <option defaultValue="2024">2024</option>
                      <option defaultValue="2025">2025</option>
                      <option defaultValue="2026">2026</option>
                      <option defaultValue="2027">2027</option>
                      <option defaultValue="2028">2028</option>
                      <option defaultValue="2029">2029</option>
                    </select>
                  </div>
                  <div className="cartao__cvv">
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      placeholder="Código CVV"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="pagamento__confirmacao">
              <input
                type="text"
                name="idPacote"
                id="idPacote"
                defaultValue={pacotes[0].id}
                hidden
              />
              <button className="btao-confirmar" type="submit">
                Confirmar Pedido
              </button>
            </div>
            <script src="./scripts/checkoutScript"></script>
          </div>
        </form>
      </main>
    </>
  );
};
export default Checkout;
