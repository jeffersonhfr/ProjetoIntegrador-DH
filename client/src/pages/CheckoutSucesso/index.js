import React from 'react';
import Footer from '../../components/Footer';


const CheckoutSucesso = () => {

    return <>


    <main className="container container-checkout">
        <div className="titulo-checkout">
            <h1>Minha Compra</h1>
        </div>
        <div className="pagamento__box">
            <div className="pagamento__box__content">
            <div className="pagamento__box__imagem">
                <img src="<%= imagem %>" alt="" width="100%"/>  
                {/* pegar imagem  */}
            </div>
            <div className="pagamento__box__detalhes pagamento__box__sucesso">
                <ul>
                    <li>
                        <h2 className="pagamento__box__detalhes__titulo">Compra realizada com sucesso!</h2>
                    </li>
                    <li>
                        <p className="pagamento__box__detalhes__paragrafo">Para maiores informações acesse o painel minhas viagens</p>
                    </li>
                    {/* if(locals.pagamento) {  */}
                        <br/>
                        <li>
                        <a href="#"><span className="pagamento-link">Clique aqui</span></a>para imprimir o seu boleto
                        </li>
                </ul>
            </div>
            </div>

        </div>
        </main>

        <Footer/>
    
     </>
}
    

export default CheckoutSucesso;