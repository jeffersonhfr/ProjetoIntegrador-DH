import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactLoading from 'react-loading';
import Parcelamento from '../../components/parcelamento';

const Checkout = ({ tokenUser }) => {
  let valor = (valor) => {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };
  const [isCartao, setCartao] = useState(false);
  const [isBoleto, setBoleto] = useState(false);
  const [isHr, setHr] = useState(false);

  const checkoutCartao = () => {
    setCartao(true);
    setBoleto(false);
    setHr(false);
    setPagamento('Cartão de Crédito');
  };

  const checkoutBoleto = () => {
    setBoleto(true);
    setCartao(false);
    setHr(true);
    setPagamento('Boleto Bancário');
  };

  const [pacote, setPacote] = useState();
  const location = useLocation();
  const { pacoteId } = location.state;
  const apiURL = 'http://localhost:3333/pacotes/' + pacoteId;

  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((res) =>
        setTimeout(() => {
          setPacote(res.pacote);
          console.log(res.pacote);
        }, 400),
      );
  }, []);

  const parcelasArr = [];
  for (let i = 0; i < pacote?.parcelas; i++) {
    parcelasArr.push(i);
  }

  setTimeout(() => {
    setValorPago(
      pacote.preco - (pacote.preco * pacote.promocaoPorcentagem) / 100,
    );
  }, 500);

  const [pagamento, setPagamento] = useState('');
  const [valorPago, setValorPago] = useState();
  const [parcela, setParcela] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch('http://localhost:3333/checkout/sucesso', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idPacote: pacoteId,
          pagamento: pagamento,
          valorPago: valorPago,
          parcelas: parcela,
          userId: tokenUser.id,
        }),
      });
      window.location.href = './checkout/sucesso';
    } catch (error) {
      console.log(error);
    }
  };
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
      <main className="container container-checkout">
        <div className="titulo-checkout">
          <h1>Minha Compra</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="pagamento__box">
            <div className="pagamento__box__content">
              <div className="pagamento__box__imagem">
                <img src={pacote.package_images[0].src} alt="" width="100%" />
              </div>
              <div className="pagamento__box__detalhes">
                <ul>
                  <li>
                    <h2 className="pagamento__box__detalhes__titulo">
                      Pacote:
                    </h2>
                    <span>{pacote.nomePacote}</span>
                  </li>
                  <li>
                    <h2 className="pagamento__box__detalhes__titulo">Valor:</h2>
                    <span>
                      {valor(
                        pacote.preco -
                          (pacote.preco * pacote.promocaoPorcentagem) / 100,
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
                        value="Boleto Bancário"
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
                        value="Cartão de Crédito"
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
              className={isBoleto ? 'mostrar' : 'metodo__pagamento__boleto'}
            ></div>

            <div className={isCartao ? 'mostrar' : 'metodo__pagamento__cartao'}>
              <hr />
              <div className="cartao__dados">
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
                    {parcelasArr.map(function (parcela, i) {
                      return (
                        <>
                          <Parcelamento
                            obj={parcela}
                            key={i}
                            parcelaN={i}
                            pacote={pacote}
                          />
                        </>
                      );
                    })}
                  </select>
                </div>
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
              <button className="btao-confirmar">Confirmar Pedido</button>
            </div>
          </div>
        </form>
      </main>
    </>
  );
};
export default Checkout;
