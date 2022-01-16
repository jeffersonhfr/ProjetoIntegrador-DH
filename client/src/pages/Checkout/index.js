import React from 'react';
import Footer from '../../components/Footer';

const Checkout = ({pacote}) =>{

    return <>

    <main className="container container-checkout">
      <div className="titulo-checkout">
        <h1>Minha Compra</h1>
      </div>
      <form action="/checkout/sucesso" method="POST">
        <div className="pagamento__box">
          <div className="pagamento__box__content">
            <div className="pagamento__box__imagem">
              <img src="<%= pack[0].package_images[0].src %>" alt="" width="100%"/>
              <input type="text" name="imagem" id="imagem" value="<%= pack[0].package_images[0].src %>" hidden/>
            </div>
            <div className="pagamento__box__detalhes">
              <ul>
                <li>
                  <h2 className="pagamento__box__detalhes__titulo">Pacote:</h2><span>
                    {/* <%= pack[0].nomePacote %> */}
                  </span>
                </li>
                <li>
                  <h2 className="pagamento__box__detalhes__titulo">Valor:</h2><span>
                    <input type="text" name="valorPago" id="valorPago" value="<%= pack[0].preco-((pack[0].preco * pack[0].promocaoPorcentagem)/100) %>" hidden/>
                    {/* <%=valor(pack[0].preco-((pack[0].preco * pack[0].promocaoPorcentagem)/100))%> */}
                  </span>
                </li>
                <li>
                  <h2 className="pagamento__box__detalhes__titulo pagamento__box__detalhes__titulo--pagamento">Forma de Pagamento:</h2>
                </li>
                <li className="metodo__pagamento">
                  <div className="metodo__pagamento__item">
                    <img className="metodo__pagamento__icone" src="assets/img/boletoBancario.png" alt="Boleto Bancário"/>
                    <input className="metodo__pagamento__input" type="radio" id="boletoBancario" name="pagamento" value="Boleto Bancário" required="required"/>
                    <label for="boletoBancario">Boleto Bancário</label>
                  </div>
                  <div className="metodo__pagamento__item">
                    <input className="metodo__pagamento__input" type="radio" id="cartaoCredito" name="pagamento" value="Cartão de Crédito"/>
                    <label for="cartaoCredito">Cartão de Crédito</label>
                    <img className="metodo__pagamento__icone" src="assets/img/cartaoCredito.png" alt="Cartão de Crédito"/>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="metodo__pagamento__boleto"></div>
          <hr className="metodo__pagamento__divisao"/>
          <div className="metodo__pagamento__cartao">
            <div className="metodo__pagamento__cartao-itens">
              <label for="nomecartao" className="label-checkout">Nome no Cartão:</label><br/>
              <input type="text" id="nomecartao" name="nomecartao"/>
            </div>

            <div className="metodo__pagamento__cartao-itens">
              <label for="numerocartao" className="label-checkout">Número do Cartão:</label><br/>
              <input type="number" id="numerocartao" name="numerocartao"/>
            </div>

            <div className="metodo__pagamento__cartao-itens">
              <label for="parcelas" className="label-checkout">Opções de Parcelas:</label><br/>
              <select name="parcelas" id="parcelas">
                {/* <% for (i=1; i <=pack[0].parcelas ; i++){%> */}
                  <option value="<%=i%>">
                    {/* <%=i%>x de <%=valor((pack[0].preco-((pack[0].preco * pack[0].promocaoPorcentagem)/100))/i)%> */}
                  </option>
                  {/* <% } %> */}
              </select>
            </div>

            <div className="metodo__pagamento__cartao-itens">
              <label for="mes" className="label-checkout">Validade (MM/AA):</label><br/>

              <div className="cartao__dados">
                <div className="cartao__mes">
                  <select name="mes" id="mes">
                    <option>Mês</option>
                    <option value="01">01 - Janeiro</option>
                    <option value="02">02 -Fevereiro</option>
                    <option value="03">03 - Março</option>
                    <option value="04">04 - Abril</option>
                    <option value="05">05 - Maio</option>
                    <option value="06">06 - Junho</option>
                    <option value="07">07 - Julho</option>
                    <option value="08">08 - Agosto</option>
                    <option value="09">09 - Setembo</option>
                    <option value="10">10 - Outubro</option>
                    <option value="11">11 - Novembro</option>
                    <option value="12">12 - Dezembro</option>
                  </select>
                </div>

                <div className="cartao__ano">
                  <select name="ano" id="ano">
                    <option>Ano</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                  </select>
                </div>
                <div className="cartao__cvv">
                  <input type="text" id="cvv" name="cvv" placeholder="Código CVV"/>
                </div>
              </div>

            </div>
          </div>
          <div className="pagamento__confirmacao">
            <input type="text" name="idPacote" id="idPacote" value="<%= pack[0].id %>" hidden/>
            <button className="btao-confirmar" type="submit">Confirmar Pedido</button>
          </div>
          <script src="src/checkout.js"></script>

        </div>
      </form>
    </main>


    
    
    
    </>
}
export default Checkout;