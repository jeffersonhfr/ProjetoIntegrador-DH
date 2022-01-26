const checkout = () => {
  let divCartao = document.querySelector('.metodo__pagamento__cartao');
  let divBoleto = document.querySelector('.metodo__pagamento__boleto');
  let divHr = document.querySelector('.metodo__pagamento__divisao');

  function startBoleto() {
    document
      .getElementById('boletoBancario')
      .addEventListener('change', addBoleto, false);
  }

  function startCartao() {
    document
      .getElementById('cartaoCredito')
      .addEventListener('change', addCartao, false);
  }

  function addBoleto() {
    divCartao.classList.remove('mostrar');
    divBoleto.classList.add('mostrar');
    divHr.classList.remove('mostrar');
    document.querySelector('#nomecartao').required = false;
    document.querySelector('#numerocartao').required = false;
    document.querySelector('#parcelas').required = false;
  }

  function addCartao() {
    divCartao.classList.add('mostrar');
    divBoleto.classList.remove('mostrar');
    divHr.classList.add('mostrar');
    document.querySelector('#nomecartao').required = true;
    document.querySelector('#numerocartao').required = true;
    document.querySelector('#parcelas').required = true;
  }

  window.addEventListener('load', startBoleto, false);
  window.addEventListener('load', startCartao, false);
};

export default checkout;
