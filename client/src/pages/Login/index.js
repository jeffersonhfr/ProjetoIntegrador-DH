import React from 'react';
import verSenha from "./scripts/ver-senha"
// import { Container } from './styles';

const Login = ({erro})=>{
  return <>
  
  <section className="container-login">
      <div className="container-imagem-login">
        <img className="imagem-login" src="/assets/img/imagem-login.jpeg" alt="imagem login" width="310px" height="290px"/>
      </div>

      <div className="container-formulario-login">
        <form action="/login" id="formulario-login" method="POST">
            {erro != null ?
          <div className="container-formulario-login__erro">
            {erro}
          </div>:null}
          <fieldset>
            <div className="formulario-login__dados">
              <input type="email" id="email" name="email" placeholder="Insira seu e-mail" required/>
              <i className="fa fa-user" aria-hidden="true"></i>
            </div>
            <div className="formulario-login__dados">

              <input type="password" className="login__senha" id="senha" name="senha" placeholder="Senha" required placeholder="Senha" required/>
              <i className="bi bi-eye-slash" id="togglePassword" onClick={verSenha}></i>
            
            </div>
          </fieldset>

          <div className="container-recuperar-senha">
            <a href="/recuperarSenha">Esqueceu sua senha?</a>
          </div>
            {/*origem?
            <input type="text" name="origem" id="origem" value="<%= origem %>" hidden/>
            :null
           */}
              <div className="container-botao-login">
                <button className="botao-login" type="submit">ENTRAR</button>
              </div>
              <div className="container-cadastro">
                <p>Ainda não é cadastrado? </p>
              </div>
              <div>
                <p className="cadastro__link-cadastro"><a href="/cadastro">Cadastre-se</a></p>
              </div>
        </form>
      </div>
    </section>

  </>
}

export default Login;