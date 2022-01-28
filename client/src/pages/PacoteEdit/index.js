import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import TravelImagesEdit from "../../components/TravelImagesEdit";

// import { Container } from './styles';

const PacoteEdit = () => {
  let loadFile = (e) => {
    console.log(e);
  };
  let loadFileCapa = (e) => {
    console.log(e);
  };

  const [pacote, setPacote] = useState();

  const { id } = useParams();
  const apiURL = "http://localhost:3333/pacotes/" + id;
  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((res) =>
        setTimeout(() => {
          setPacote(res.pacote[0]);
        })
      );
  }, []);

  console.log(pacote);
  const pacotes = [pacote];
  console.log(pacotes);

  return (
    <>
      <div className="container">
        <form
          action=""
          method="POST"
          className="addPacote"
          encType="multipart/form-data"
        >
          <article className="addPacote-TitleContainer">
            <h1 className="addPacote-TitleContainer">Editar Pacote</h1>
          </article>
          <h2 className="addPacote-TitleContainer">Imagens</h2>

          <nav
            className="addPacote-ImgContainer"
            style={{ position: "relative" }}
          >
            <ul className="addPacote-ImgContainer__Img-list">
              <li class="listagemFoto">
                <h2>Imagem da Capa</h2>
                <img
                  src={pacotes[0].package_images[0].src}
                  id="imgpackcapa"
                  width="300px"
                  height="200px"
                  class="img-pack"
                />
                <input
                  type="file"
                  name="capa"
                  accept="image/png, image/jpeg"
                  onchange={loadFileCapa()}
                />
              </li>

              <li class="listagemFoto">
                <h2>Imagem 01</h2>
                <img
                  src={pacotes.package_images[0].src}
                  width="300px"
                  height="200px"
                  id="imgpack1"
                  class="img-pack "
                />
                <input
                  type="file"
                  name="imagem"
                  accept="image/png, image/jpeg"
                  onchange={loadFile()}
                />
              </li>

              <li class="listagemFoto">
                <h2>Imagem 02</h2>
                <img
                  src={pacotes.package_images[1].src}
                  id="imgpack2"
                  width="300px"
                  height="200px"
                  class="img-pack"
                />
                <input
                  type="file"
                  name="imagem"
                  accept="image/png, image/jpeg"
                  onchange={loadFile()}
                />
              </li>

              <li class="listagemFoto">
                <h2>Imagem 03</h2>
                <img
                  src={pacotes.package_images[2].src}
                  id="imgpack3"
                  width="300px"
                  height="200px"
                  class="img-pack"
                />
                <input
                  type="file"
                  name="imagem"
                  accept="image/png, image/jpeg"
                  onchange={loadFile()}
                />
              </li>

              <li class="listagemFoto">
                <h2>Imagem 04</h2>
                <img
                  src={pacotes.package_images[3].src}
                  id="imgpack4"
                  width="300px"
                  height="200px"
                  class="img-pack"
                />
                <input
                  type="file"
                  name="imagem"
                  accept="image/png, image/jpeg"
                  onchange={loadFile()}
                />
              </li>

              <li class="listagemFoto">
                <h2>Imagem 05</h2>
                <img
                  src={pacotes.package_images[4].src}
                  id="imgpack5"
                  width="300px"
                  height="200px"
                  class="img-pack"
                />
                <input
                  type="file"
                  name="imagem"
                  accept="image/png, image/jpeg"
                  onchange={loadFile()}
                />
              </li>

              <li class="listagemFoto">
                <h2>Imagem 06</h2>
                <img
                  src={pacotes.package_images[5].src}
                  id="imgpack6"
                  width="300px"
                  height="200px"
                  class="img-pack"
                />
                <input
                  type="file"
                  name="imagem"
                  accept="image/png, image/jpeg"
                  onchange={loadFile()}
                />
              </li>
            </ul>
          </nav>

          <h2 className="addPacote-TitleContainer">
            Adicione as informações sobre o pacote
          </h2>
          <ul className="Pacote-Propriedades">
            <li className="Pacote-Propriedades__Item Pacote-Propriedades__Item--addpack">
              <label>Nome Pacote</label>
              <input
                type="text"
                name="nomePacote"
                id="nomePacote"
                readOnly
                value={pacotes.nomePacote}
              />
            </li>
            <li className="Pacote-Propriedades__Item Pacote-Propriedades__Item--addpack">
              <label>Nome do Hotel</label>
              <input
                type="text"
                name="nomeHotel"
                id="nomeHotel"
                readOnly
                value={pacotes.nomeHotel}
              />
            </li>
            <li className="Pacote-Propriedades__Item Pacote-Propriedades__Item--addpack Titulo">
              <label>Diárias</label>
              <input
                type="number"
                name="diarias"
                id="diarias"
                readOnly
                value={pacotes.diarias}
              />
            </li>
            <li className="Pacote-Propriedades__Item Pacote-Propriedades__Item--addpack">
              <label>Destino:</label>

              {pacotes.nacional == 1 ? (
                <div className="radio-box">
                  <div className="radio-opt">
                    <input
                      type="radio"
                      name="nacional"
                      id="nacional"
                      readOnly
                      value="1"
                      defaultChecked
                    />{" "}
                    Nacional
                  </div>
                  <div className="radio-opt">
                    <input
                      type="radio"
                      name="nacional"
                      id="nacional"
                      readOnly
                      value="0"
                    />{" "}
                    Internacional
                  </div>
                </div>
              ) : (
                <div className="radio-box">
                  <div className="radio-opt">
                    <input
                      type="radio"
                      name="nacional"
                      id="nacional"
                      readOnly
                      value="1"
                    />{" "}
                    Nacional
                  </div>
                  <div className="radio-opt">
                    <input
                      type="radio"
                      name="nacional"
                      id="nacional"
                      readOnly
                      value="0"
                      defaultChecked
                    />{" "}
                    Internacional
                  </div>
                </div>
              )}
            </li>
            <li className="Pacote-Propriedades__Item Pacote-Propriedades__Item--addpack">
              <label>Passagem Aérea:</label>

              {pacotes.passagemAerea == 1 ? (
                <div className="radio-box">
                  <div className="radio-opt">
                    <input
                      type="radio"
                      name="passagemAerea"
                      id="passagemAerea"
                      readOnly
                      value="1"
                      defaultChecked
                    />{" "}
                    Sim
                  </div>
                  <div className="radio-opt">
                    <input
                      type="radio"
                      name="passagemAerea"
                      id="passagemAerea"
                      readOnly
                      value="0"
                    />{" "}
                    Não
                  </div>
                </div>
              ) : (
                <div className="radio-box">
                  <div className="radio-opt">
                    <input
                      type="radio"
                      name="passagemAerea"
                      id="passagemAerea"
                      readOnly
                      value="1"
                    />{" "}
                    Sim
                  </div>
                  <div className="radio-opt">
                    <input
                      type="radio"
                      name="passagemAerea"
                      id="passagemAerea"
                      readOnly
                      value="0"
                      defaultChecked
                    />{" "}
                    Não
                  </div>
                </div>
              )}
            </li>

            <li className="Pacote-Propriedades__Item Pacote-Propriedades__Item--addpack">
              <label htmlFor="adicionais">Adicionais</label>
              <div className="checkbox-div">
                {pacotes.adicionail.map((e) => {
                  return (
                    <div className="checkbox-opt">
                      {pacotes.adicional.find((i) => i.id === e.id) ? (
                        <input
                          type="checkbox"
                          name="adicionais"
                          id="adicionais"
                          readOnly
                          value={e.id}
                          readOnly
                          defaultChecked
                        />
                      ) : (
                        <input
                          type="checkbox"
                          name="adicionais"
                          id="adicionais"
                          readOnly
                          value={e.id}
                          readOnly
                        />
                      )}
                      {e.pacotes.nomeAdicional}
                    </div>
                  );
                })}
              </div>
            </li>
            <br />
            <li className="Pacote-Propriedades__Item Pacote-Propriedades__Item--addpack">
              <label htmlFor="categorias">Categorias</label>
              <div className="checkbox-div">
                {pacotes.categoria.map((e) => {
                  return (
                    <div className="checkbox-opt">
                      {" "}
                      {pacotes.categoria.find((i) => i.id === e.id) ? (
                        <input
                          type="checkbox"
                          name="categorias"
                          id="categorias"
                          readOnly
                          value={e.id}
                          defaultChecked
                        />
                      ) : (
                        <input
                          type="checkbox"
                          name="categorias"
                          id="categorias"
                          readOnly
                          value={e.id}
                        />
                      )}
                      {e.pacotes.nomeCategoria}
                    </div>
                  );
                })}
              </div>
            </li>
          </ul>

          <h2 className="addPacote-TitleContainer">
            Adicione os dados financeiros
          </h2>
          <ul className="Pacote-Propriedades">
            <li className="Pacote-Propriedades__Item Pacote-Propriedades__Item--addpack">
              <label>Valor do Pacote</label>
              <input
                type="text"
                name="preco"
                id="preco"
                readOnly
                value={pacotes.preco}
                placeholder="ex.: 19990.00 - R$ 19.990,00"
              />
            </li>
            <li className="Pacote-Propriedades__Item Pacote-Propriedades__Item--addpack">
              <label>Percentual de desconto</label>
              <input
                type="text"
                name="promocaoPorcentagem"
                readOnly
                value={pacotes.promocaoPorcentagem}
                id="promocaoPorcentagem"
                placeholder="ex. 10"
              />
            </li>
            <li className="Pacote-Propriedades__Item Pacote-Propriedades__Item--addpack Titulo">
              <label>Número máximo de parcelas</label>
              <input
                type="number"
                name="parcelas"
                id="parcelas"
                readOnly
                value={pacotes.parcelas}
              />
            </li>
          </ul>

          <h2 className="addPacote-TitleContainer">
            Adicione as descrições sobre o pacote e local
          </h2>
          <ul className="Pacote-Propriedades">
            <li className="Pacote-Propriedades__Item Pacote-Propriedades__Item--addpack">
              <label>Sobre o Destino</label>
              <textarea
                name="sobre"
                id="sobre"
                cols="30"
                rows="10"
                readOnly
                defaultValue={pacotes.sobre}
              />
            </li>
            <li className="Pacote-Propriedades__Item Pacote-Propriedades__Item--addpack">
              <label>Pontos Turísticos</label>
              <textarea
                name="pontoTuristico"
                id="pontoTuristico"
                cols="30"
                rows="10"
                readOnly
                defaultValue={pacotes.pontoTuristico}
              />
            </li>
          </ul>

          <button
            type="submit"
            title="Criar Pacote"
            className="Pacote__Button-Comprar"
          >
            Editar
          </button>
        </form>
      </div>
    </>
  );
};

export default PacoteEdit;
