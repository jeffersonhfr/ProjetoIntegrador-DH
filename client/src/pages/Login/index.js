import React from 'react';

// import { Container } from './styles';

const Login = ({erro})=>{
  return <>
  
  <section class="container-login">
      <div class="container-imagem-login">
        <img class="imagem-login" src="/assets/img/imagem-login.jpeg" alt="imagem login" width="310px" height="290px"/>
      </div>

      <div class="container-formulario-login">
        <form action="/login" id="formulario-login" method="POST">
            {erro != null ?
          <div class="container-formulario-login__erro">
            {erro}
          </div>:null}
          <fieldset>
            <div class="formulario-login__dados">
              <input type="email" id="email" name="email" placeholder="Insira seu e-mail" required/>
              <i class="fa fa-user" aria-hidden="true"></i>
            </div>
            <div class="formulario-login__dados">

              <input type="password" class="login__senha" id="senha" name="senha" placeholder="Senha" required placeholder="Senha" required/>
              <i class="bi bi-eye-slash" id="togglePassword"></i>
            
            </div>
          </fieldset>

          <div class="container-recuperar-senha">
            <a href="/recuperarSenha">Esqueceu sua senha?</a>
          </div>
         {origin?
            <input type="text" name="origem" id="origem" value="<%= origem %>" hidden/>
            :null
           }
              <div class="container-botao-login">
                <button class="botao-login" type="submit">ENTRAR</button>
              </div>
              <div class="container-cadastro">
                <p>Ainda não é cadastrado? </p>
              </div>
              <div>
                <p class="cadastro__link-cadastro"><a href="/cadastro">Cadastre-se</a></p>
              </div>
        </form>
      </div>
    </section>

  </>
}

export default Login;