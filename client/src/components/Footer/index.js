import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route, useParams } from 'react-router-dom';

const Footer = () => {
  let facebook = '/assets/img/facebook.png';
  let instagram = '/assets/img/instagram.png';
  let twitter = '/assets//img/twitter.png';

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3333/categorias')
      .then((res) => res.json())
      .then((res) => setCategorias(res.categorias));
  }, []);

  return (
    <footer>
      <div className="container">
        <section className="footer__conteudo">
          <div className="footer__lista">
            <h5 className="footer__lista__titulo">Viagens Temáticas</h5>

            {categorias.map((categorias) => (
              <li className="footer__lista__link">
                <a href={`/pacotes/?categoria=${categorias.nomeCategoria}`}>
                  {categorias.nomeCategoria}
                </a>
              </li>
            ))}
          </div>

          <div className="footer__lista">
            <h5 className="footer__lista__titulo">Nossos Pacotes</h5>
            <ul>
              <li>
                <a
                  href="/pacotes?destino=nacional"
                  className="footer__lista__link"
                >
                  Pacotes Nacionais
                </a>
              </li>
              <li>
                <a
                  href="/pacotes?destino=internacional"
                  className="footer__lista__link"
                >
                  Pacotes Internacionais
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__lista">
            <h5 className="footer__lista__titulo">Sobre Nós</h5>
            <ul>
              <li>
                <Link to="/sobre#historia" className="footer__lista__link">
                  História da Empresa
                </Link>
              </li>
              <li>
                <Link to="/sobre#fale" className="footer__lista__link">
                  Fale conosco
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__lista">
            <h5 className="footer__lista__titulo">Ajuda</h5>
            <ul>
              <li>
                <Link to="/ajuda#duvidas" className="footer__lista__link">
                  Dúvidas Frequentes
                </Link>
              </li>
              <li>
                <Link to="/ajuda#cancelamentos" className="footer__lista__link">
                  Cancelamentos
                </Link>
              </li>
              <li>
                <Link
                  to="/ajuda#politica-privacidade"
                  className="footer__lista__link"
                >
                  Políticas de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__lista__contato">
            <h5 className="footer__lista__titulo">
              Siga as nossas redes sociais
            </h5>
            <ul>
              <li>
                <Link
                  to="http://facebook.com"
                  className="footer__lista__link social"
                >
                  <img
                    alt="facebook"
                    src={facebook}
                    alt="foto de perfil"
                    width="40px"
                    height="40px"
                  />
                </Link>
              </li>
              <li>
                <Link
                  to="http://integram.com"
                  className="footer__lista__link social"
                >
                  <img
                    alt="instagram"
                    src={instagram}
                    alt="foto de perfil"
                    width="40px"
                    height="40px"
                  />
                </Link>
              </li>

              <li>
                <Link
                  to="http://twitter.com"
                  className="footer__lista__link social"
                >
                  <img
                    alt="twitter"
                    src={twitter}
                    alt="foto de perfil"
                    width="40px"
                    height="40px"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </section>
        <p className="copyright">
          Viagem.com | Todos os direitos reservados - 2021
        </p>
      </div>
    </footer>
  );
};

export default Footer;
