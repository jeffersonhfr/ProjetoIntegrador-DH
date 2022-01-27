import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const AdicionarPacote = () => {
  return (
    <>
      <div className="container">
        <form
          action=""
          method="POST"
          className="addPacote"
          enctype="multipart/form-data"
        >
          <article className="addPacote-TitleContainer">
            <h1 className="addPacote-TitleContainer">Adicionar Pacotes</h1>
          </article>

          <h2 className="addPacote-TitleContainer">Adicione as imagens</h2>
          <nav className="addPacote-ImgContainer" style="position: relative;">
            <ul className="addPacote-ImgContainer__Img-list">
              <input
                name="imagem"
                id="imagemCapa"
                type="file"
                onchange="uploadPreview(event)"
                accept=".jpg"
              />
              <input
                name="imagem"
                id="imagem01"
                type="file"
                onchange="uploadPreview(event)"
                accept=".jpg"
              />
              <input
                name="imagem"
                id="imagem02"
                type="file"
                onchange="uploadPreview(event)"
                accept=".jpg"
              />
              <input
                name="imagem"
                id="imagem03"
                type="file"
                onchange="uploadPreview(event)"
                accept=".jpg"
              />
              <input
                name="imagem"
                id="imagem04"
                type="file"
                onchange="uploadPreview(event)"
                accept=".jpg"
              />
              <input
                name="imagem"
                id="imagem05"
                type="file"
                onchange="uploadPreview(event)"
                accept=".jpg"
              />
              <input
                name="imagem"
                id="imagem06"
                type="file"
                onchange="uploadPreview(event)"
                accept=".jpg"
              />
            </ul>
          </nav>
          <script src="../src/imagens-preview.js"></script>

          <h2 className="addPacote-TitleContainer">
            Adicione as informações sobre o pacote
          </h2>
          <ul className="Pacote-Propriedades">
            <li className="Pacote-Propriedades__Item Pacote-Propriedades__Item--addpack">
              <label>Nome Pacote</label>
              <input type="text" name="nomePacote" id="nomePacote" />
            </li>
            <li className="Pacote-Propriedades__Item Pacote-Propriedades__Item--addpack">
              <label>Nome do Hotel</label>
              <input type="text" name="nomeHotel" id="nomeHotel" />
            </li>
            <li className="Pacote-Propriedades__Item Pacote-Propriedades__Item--addpack Titulo">
              <label>Diárias</label>
              <input type="number" name="diarias" id="diarias" />
            </li>
            <li className="Pacote-Propriedades__Item Pacote-Propriedades__Item--addpack">
              <label>Destino:</label>
              <div className="radio-box">
                <div className="radio-opt">
                  <input type="radio" name="nacional" id="nacional" value="1" />
                  Nacional
                </div>
                <div className="radio-opt">
                  <input type="radio" name="nacional" id="nacional" value="0" />
                  Internacional
                </div>
              </div>
            </li>
            <li className="Pacote-Propriedades__Item Pacote-Propriedades__Item--addpack">
              <label>Passagem Aérea:</label>
              <div className="radio-box">
                <div className="radio-opt">
                  <input
                    type="radio"
                    name="PassagemAerea"
                    id="PassagemAerea"
                    value="1"
                  />{" "}
                  Sim
                </div>
                <div className="radio-opt">
                  <input
                    type="radio"
                    name="PassagemAerea"
                    id="PassagemAerea"
                    value="0"
                  />{" "}
                  Não
                </div>
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
                placeholder="ex.: 19990.00 - R$ 19.990,00"
              />
            </li>
            <li className="Pacote-Propriedades__Item Pacote-Propriedades__Item--addpack">
              <label>Percentual de desconto</label>
              <input
                type="text"
                name="promocaoPorcentagem"
                id="promocaoPorcentagem"
                placeholder="ex. 10"
              />
            </li>
            <li className="Pacote-Propriedades__Item Pacote-Propriedades__Item--addpack Titulo">
              <label>Número máximo de parcelas</label>
              <input type="number" name="parcelas" id="parcelas" />
            </li>
          </ul>

          <h2 className="addPacote-TitleContainer">
            Adicione as descrições sobre o pacote e local
          </h2>
          <ul className="Pacote-Propriedades">
            <li className="Pacote-Propriedades__Item Pacote-Propriedades__Item--addpack">
              <label>Sobre o Destino</label>
              <textarea name="sobre" id="sobre" cols="30" rows="10"></textarea>
            </li>
            <li className="Pacote-Propriedades__Item Pacote-Propriedades__Item--addpack">
              <label>Pontos Turísticos</label>
              <textarea
                name="pontoTuristico"
                id="pontoTuristico"
                cols="30"
                rows="10"
              ></textarea>
            </li>
          </ul>

          <button
            type="submit"
            title="Criar Pacote"
            className="Pacote__Button-Comprar"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </>
  );
};

export default AdicionarPacote;
