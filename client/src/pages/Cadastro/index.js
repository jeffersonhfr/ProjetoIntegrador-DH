import React, { useState } from "react";
import Header from "../../components/Header";
import Filtro from "../../components/Filtro";
import TravelCard from "../../components/TravelCard";
import Footer from "../../components/Footer";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setCofirmarSenha] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:3333/cadastro", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          senha,
          confirmarSenha,
          nome,
        }),
      });
      res = await res.json();
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };
  // function validacao(e) {
  //   e.preventDefault();
  //   var senha1 = document.getElementById("senha");
  //   var senha2 = document.getElementById("confimar-senha");
  //   senha2.addEventListener("blur", () => {
  //     if (senha1 !== senha2) {
  //       e.stopPropagation();
  //       alert("As Senhas não conferem!");
  //     }
  //   });
  // }

  // function validacao2() {
  //   var senha1 = document.getElementById("senha");
  //   var regex =
  //     /^(?=(?:.*?[A-Z]){1})(?=(?:.*?[0-9]){1})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/;

  //   senha1.addEventListener("blur", () => {
  //     if (senha.length < 8) {
  //       alert("A senha deve conter no minímo 8 digitos!");
  //       document.senha1.focus();
  //       return false;
  //     } else if (!regex.exec(senha)) {
  //       alert(
  //         "A senha deve conter no mínimo 3 caracteres em maiúsculo, 2 números e 1 caractere especial!"
  //       );
  //       document.senha1.focus();
  //       return false;
  //     }
  //     return true;
  //   });
  // }

  return (
    <>
      <section className="container-login">
        <div className="container-imagem-login">
          <img
            className="imagem-login"
            src="assets/img/imagem-login.jpeg"
            alt="imagem login"
            width="310px"
            height="290px"
          />
        </div>

        <div className="container-formulario-login">
          <form onSubmit={handleSubmit} id="formulario-cadastro">
            <fieldset>
              <div className="formulario-login__dados">
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
              </div>

              <div className="formulario-login__dados">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="formulario-login__dados">
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  placeholder="Senha:"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  // onBlur={validacao2}
                  required
                />
                <input
                  type="password"
                  id="confimar-senha"
                  placeholder="Confirmar senha:"
                  value={confirmarSenha}
                  onChange={(e) => setCofirmarSenha(e.target.value)}
                  // onBlur={validacao}
                  required
                />
              </div>
            </fieldset>

            <div className="container-aceite">
              <input type="checkbox" id="aceite" name="aceite" required />
              <label htmlFor="aceite">
                Li e aceito os{" "}
                <a href="/termos-de-servico" className="aceite__termos-servico">
                  {" "}
                  Termos e condições
                </a>{" "}
                de serviço{" "}
              </label>
            </div>

            <div className="container-aceite">
              <input type="checkbox" id="novidades" name="novidades" />
              <label htmlFor="novidades">
                Desejo receber as promoções, novidades e dicas.
              </label>
            </div>

            <div className="container-botao-login">
              <button className="botao-login" type="submit">
                CADASTRAR-SE
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Cadastro;
