import React from "react";

const RecuperarSenha = () => {
  function redireciona() {
    const email = document.querySelector("#email");
    if (email.value === "") {
      return;
    } else {
      alert("O link de recuperação foi enviado ao seu email");
      window.location = "http://localhost:3000/Login";
    }
  }

  let img = "../assets/img/imagem-login.jpeg";
  return (
    <>
      <section class="container-login">
        <div class="container-imagem-login">
          <img
            class="imagem-login"
            src={img}
            alt="imagem login"
            width="310px"
            height="290px"
          />
        </div>

        <div class="container-formulario-login">
          <form action="/login" id="formulario-login" method="POST">
            <div class="container-formulario-login__erro">
              {/* <%= erro %> */}
            </div>
            <fieldset>
              <div class="formulario-login__dados-recuperar">
                <div>
                  <p class="redefinir-senha"> Redefinir senha </p>
                  <p class="redefinir-senha-p">
                    Insira abaixo o e-mail vinculado à sua conta e iremos enviar
                    um link para redefinição de sua senha.
                  </p>
                </div>
                <div class="redefinir-senha__email">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
            </fieldset>
            <div class="container-botao-login">
              <button class="botao-login" type="submit" onclick={redireciona}>
                {" "}
                Enviar{" "}
              </button>
            </div>
            <div class="container-cadastro">
              <p>Ainda não é cadastrado? </p>
            </div>
            <div>
              <p class="cadastro__link-cadastro">
                <a href="/cadastro">Cadastre-se</a>
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
export default RecuperarSenha;
