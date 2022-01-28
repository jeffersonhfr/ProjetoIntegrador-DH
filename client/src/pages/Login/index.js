import React, { useState } from 'react';
import verSenha from './scripts/ver-senha';
import auth from '../../storage/auth';
import user from '../../storage/user';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// import { Container } from './styles';

const Login = ({ erro }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loginError, setloginError] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch('http://localhost:3333/login', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });
      res = await res.json();
      auth.setToken(res.token);
      user.setUser(res.user);
      window.location.href = '/';
      // window.location.reload();
    } catch (error) {
      // console.log(error);
      setloginError('Login ou senha inválida!');
    }
  };

  return (
    <>
      <section className="container-login">
        <div className="container-imagem-login">
          <img
            className="imagem-login"
            src="/assets/img/imagem-login.jpeg"
            alt="imagem login"
            width="310px"
            height="290px"
          />
        </div>

        <div className="container-formulario-login">
          <div class="container-formulario-login__erro">{loginError}</div>
          <form id="formulario-login" onSubmit={handleSubmit}>
            {erro != null ? (
              <div className="container-formulario-login__erro">{erro}</div>
            ) : null}
            <fieldset>
              <div className="formulario-login__dados">
                <input
                  type="email"
                  id="email"
                  placeholder="Insira seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <i className="fa fa-user" aria-hidden="true"></i>
              </div>
              <div className="formulario-login__dados">
                <input
                  type="password"
                  className="login__senha"
                  id="senha"
                  placeholder="Senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                />
                <i
                  className="bi bi-eye-slash"
                  id="togglePassword"
                  onClick={verSenha}
                ></i>
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
              <button className="botao-login" type="submit">
                ENTRAR
              </button>
            </div>
            <div className="container-cadastro">
              <p>Ainda não é cadastrado? </p>
            </div>
            <div>
              <p className="cadastro__link-cadastro">
                <a href="/cadastro">Cadastre-se</a>
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
