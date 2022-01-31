import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import AdicionaisPacote from "../../components/AdicionaisPacote";
const PacoteEdit = () => {
  const [nomePacote, setNomePacote] = useState("");
  const [nomeHotel, setNomeHotel] = useState("");
  const [diarias, setDiarias] = useState("");
  const [preco, setPreco] = useState("");
  const [promocaoPorcentagem, setPromocaoPorcentagem] = useState("");
  const [parcelas, setParcelas] = useState("");
  const [sobre, setSobre] = useState("");
  const [pontoTuristico, setPontoTuristico] = useState("");

  const [pacote, setPacote] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch("http://localhost:3333/pacotes/" + id)
      .then((res) => res.json())
      .then((res) =>
        setTimeout(() => {
          setNomePacote(res.nomePacote);
          setNomeHotel(res.nomeHotel);
          setDiarias(res.diarias);
          setPreco(res.preco);
          setPromocaoPorcentagem(res.promocaoPorcentagem);
          setParcelas(res.parcelas);
          setSobre(res.sobre);
          setPontoTuristico(res.pontoTuristico);
          setPacote(res.pacote);
        }, 400)
      );
  }, []);

  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3333/categorias")
      .then((res) => res.json())
      .then((res) => setCategorias(res.categorias));
  }, []);

  const [adicional, setAdicional] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3333/adicionais")
      .then((res) => res.json())
      .then((res) => setAdicional(res.adicional));
  }, []);
  // const adicional = [adicionais];

  const pacotes = [pacote];
  const idPacote = pacote?.id;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:3333/pacotes/" + id + "/editar", {
        method: "put",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nomePacote,
          nomeHotel,
          diarias,
          preco,
          promocaoPorcentagem,
          parcelas,
          sobre,
          pontoTuristico,
        }),
      });
      window.location.href = "/pacotes";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>AQUI</h1>
      {pacote.nomePacote}
      {/* AQUI */}
      {pacote.sobre}
      <form
        onSubmit={handleSubmit}
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
                // src={pacote.package_images[0].src}
                id="imgpackcapa"
                width="300px"
                height="200px"
                class="img-pack"
              />
              <input
                type="file"
                name="capa"
                accept="image/png, image/jpeg"
                // onchange={loadFileCapa()}
              />
            </li>

            <li class="listagemFoto">
              <h2>Imagem 01</h2>
              <img
                // src={pacote.package_images[0].src}
                width="300px"
                height="200px"
                id="imgpack1"
                class="img-pack "
              />
              <input
                type="file"
                name="imagem"
                accept="image/png, image/jpeg"
                // onchange={loadFile()}
              />
            </li>

            <li class="listagemFoto">
              <h2>Imagem 02</h2>
              <img
                // src={pacote.package_images[1].src}
                id="imgpack2"
                width="300px"
                height="200px"
                class="img-pack"
              />
              <input
                type="file"
                name="imagem"
                accept="image/png, image/jpeg"
                // onchange={loadFile()}
              />
            </li>

            <li class="listagemFoto">
              <h2>Imagem 03</h2>
              <img
                // src={pacote.package_images[2].src}
                id="imgpack3"
                width="300px"
                height="200px"
                class="img-pack"
              />
              <input
                type="file"
                name="imagem"
                accept="image/png, image/jpeg"
                // onchange={loadFile()}
              />
            </li>

            <li class="listagemFoto">
              <h2>Imagem 04</h2>
              <img
                // src={pacote.package_images[3].src}
                id="imgpack4"
                width="300px"
                height="200px"
                class="img-pack"
              />
              <input
                type="file"
                name="imagem"
                accept="image/png, image/jpeg"
                // onchange={loadFile()}
              />
            </li>

            <li class="listagemFoto">
              <h2>Imagem 05</h2>
              <img
                // src={pacote.package_images[4].src}
                id="imgpack5"
                width="300px"
                height="200px"
                class="img-pack"
              />
              <input
                type="file"
                name="imagem"
                accept="image/png, image/jpeg"
                // onchange={loadFile()}
              />
            </li>

            <li class="listagemFoto">
              <h2>Imagem 06</h2>
              <img
                // src={pacote.package_images.src}
                id="imgpack6"
                width="300px"
                height="200px"
                class="img-pack"
              />
              <input
                type="file"
                name="imagem"
                accept="image/png, image/jpeg"
                // onchange={loadFile()}
              />
            </li>
          </ul>
        </nav>
        <h2 className="addPacote-TitleContainer">
          Adicione as informações sobre o pacote
        </h2>
        <li className="Pacote-Propriedades__Item Pacote-Propriedades__Item--addpack">
          <label>Nome Pacote</label>
          <input
            type="text"
            name="nomePacote"
            id="nomePacote"
            placeholder={pacote.nomePacote}
            value={nomePacote}
            onChange={(e) => setNomePacote(e.target.value)}
          />
        </li>
        <li className="Pacote-Propriedades__Item Pacote-Propriedades__Item--addpack">
          <label>Nome do Hotel</label>
          <input
            type="text"
            name="nomeHotel"
            id="nomeHotel"
            placeholder={pacote.nomeHotel}
            value={nomeHotel}
            onChange={(e) => setNomeHotel(e.target.value)}
          />
        </li>
        <li className="Pacote-Propriedades__Item Pacote-Propriedades__Item--addpack Titulo">
          <label>Diárias</label>
          <input
            type="number"
            name="diarias"
            id="diarias"
            placeholder={pacote.diarias}
            value={diarias}
            onChange={(e) => setDiarias(e.target.value)}
          />
        </li>

        <li className="Pacote-Propriedades__Item Pacote-Propriedades__Item--addpack">
          <label>Destino:</label>

          {pacote.nacional == 1 ? (
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

          {pacote.passagemAerea == 1 ? (
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

          {/* <div className="checkbox-div">
            {adicional.map((e) => {
              return (
                <div className="checkbox-opt">
                  {pacote.adicional.find((i) => i.id === e.id) ? (
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
                  {e.nomeAdicional}
                </div>
              );
            })}
          </div> */}
        </li>
        <li className="Pacote-Propriedades__Item Pacote-Propriedades__Item--addpack">
          <label htmlFor="categorias">Categorias</label>
          <div className="checkbox-div">
            {/* {categorias.map((e) => {
              return (
                <div className="checkbox-opt">
                  {" "}
                  {pacote.categoria.find((i) => i.id === e.id) ? (
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
                  {e.nomeCategoria}
                </div>
              );
            })} */}
          </div>

          {/* {categorias.map((categorias) => (
            <div> {categorias.nomeCategoria}</div>
          ))} */}
        </li>

        <br />
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
              placeholder={pacote.preco}
              defaultValue={preco}
              onChange={(e) => setPreco(e.target.value)}
            />
          </li>
          <li className="Pacote-Propriedades__Item Pacote-Propriedades__Item--addpack">
            <label>Percentual de desconto</label>
            <input
              type="text"
              name="promocaoPorcentagem"
              placeholder={pacote.promocaoPorcentagem}
              id="promocaoPorcentagem"
              value={promocaoPorcentagem}
              onChange={(e) => setPromocaoPorcentagem(e.target.value)}
            />
          </li>
          <li className="Pacote-Propriedades__Item Pacote-Propriedades__Item--addpack Titulo">
            <label>Número máximo de parcelas</label>
            <input
              type="number"
              name="parcelas"
              id="parcelas"
              placeholder={pacote.parcelas}
              defaultValue={parcelas}
              onChange={(e) => setParcelas(e.target.value)}
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
              defaultValue={pacote.sobre}
              onChange={(e) => setSobre(e.target.value)}
            />
          </li>

          <li className="Pacote-Propriedades__Item Pacote-Propriedades__Item--addpack">
            <label>Pontos Turísticos</label>
            <textarea
              name="pontoTuristico"
              id="pontoTuristico"
              cols="30"
              rows="10"
              defaultValue={pacote.pontoTuristico}
              onChange={(e) => setPontoTuristico(e.target.value)}
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
    </>
  );
};

export default PacoteEdit;
