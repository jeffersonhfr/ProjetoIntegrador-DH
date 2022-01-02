import React from "react";

const Footer = () => {
  let facebook = "/assets/img/facebook.png";
  let instagram = "/assets/img/instagram.png";
  let twitter = "/assets//img/twitter.png";

  return (
    <footer>
      <div class="container">
        <section class="footer__conteudo">
          <div class="footer__lista">
            <h5 class="footer__lista__titulo">Viagens Temáticas</h5>

            {/* COLOCAR O MAP */}
            <ul>
              <li class="footer__lista__link">Aventura</li>
              <li class="footer__lista__link">Familia </li>
              <li class="footer__lista__link">Histórico </li>
              <li class="footer__lista__link">Neve </li>
              <li class="footer__lista__link">Praia</li>
              <li class="footer__lista__link">Romance</li>
            </ul>
          </div>

          <div class="footer__lista">
            <h5 class="footer__lista__titulo">Nossos Pacotes</h5>
            <ul>
              <li>
                <a href="/pacotes?destino=nacional" class="footer__lista__link">
                  Pacotes Nacionais
                </a>
              </li>
              <li>
                <a
                  href="/pacotes?destino=internacional"
                  class="footer__lista__link"
                >
                  Pacotes Internacionais
                </a>
              </li>
            </ul>
          </div>

          <div class="footer__lista">
            <h5 class="footer__lista__titulo">Sobre Nós</h5>
            <ul>
              <li>
                <a href="/sobre#historia" class="footer__lista__link">
                  História da Empresa
                </a>
              </li>
              <li>
                <a href="/sobre#fale" class="footer__lista__link">
                  Fale conosco
                </a>
              </li>
            </ul>
          </div>

          <div class="footer__lista">
            <h5 class="footer__lista__titulo">Ajuda</h5>
            <ul>
              <li>
                <a href="/ajuda#duvidas" class="footer__lista__link">
                  Dúvidas Frequentes
                </a>
              </li>
              <li>
                <a href="/ajuda#cancelamentos" class="footer__lista__link">
                  Cancelamentos
                </a>
              </li>
              <li>
                <a
                  href="/ajuda#politica-privacidade"
                  class="footer__lista__link"
                >
                  Políticas de Privacidade
                </a>
              </li>
            </ul>
          </div>

          <div class="footer__lista__contato">
            <h5 class="footer__lista__titulo">Siga as nossas redes sociais</h5>
            <ul>
              <li>
                <a
                  href="http://facebook.com"
                  class="footer__lista__link social"
                >
                  <img
                    alt="facebook"
                    src={facebook}
                    alt="foto de perfil"
                    width="40px"
                    height="40px"
                  />
                </a>
              </li>
              <li>
                <a
                  href="http://integram.com"
                  class="footer__lista__link social"
                >
                  <img
                    alt="instagram"
                    src={instagram}
                    alt="foto de perfil"
                    width="40px"
                    height="40px"
                  />
                </a>
              </li>

              <li>
                <a href="http://twitter.com" class="footer__lista__link social">
                  <img
                    alt="twitter"
                    src={twitter}
                    alt="foto de perfil"
                    width="40px"
                    height="40px"
                  />
                </a>
              </li>
            </ul>
          </div>
        </section>
        <p class="copyright">
          Viagem.com | Todos os direitos reservados - 2021
        </p>
      </div>
    </footer>
  );
};

export default Footer;
