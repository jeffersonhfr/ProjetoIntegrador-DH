import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const CategoriaAdd = () => {
  const cardpreview = document.querySelector('#cardpreview');
  function trocarCor() {
    let colorPicker = document.querySelector('#corCategoria').value;
    let corSelecionada = colorPicker + 'aa';
    cardpreview.style.background = corSelecionada;
  }

  const h1Preview = document.querySelector('#h1Preview');
  const nomeCategoria = document.querySelector('#nomeCategoria');
  function mudarTexto() {
    h1Preview.innerText = nomeCategoria.value;
  }

  var loadFile = function (e) {
    var output = document.getElementById('imgPreview');
    output = URL.createObjectURL(e.target.files[0]);
    console.log(output);

    document
      .getElementById('imgPreview')
      .setAttribute('style', 'background-image: url(' + output + ')');
  };

  return (
    <>
      />
      <div className="container">
        <form
          action=""
          method="POST"
          className="formCategoria"
          enctype="multipart/form-data"
        >
          <article className="addPacote-TitleContainer">
            <h1 className="addPacote-TitleContainer">Adicionar Categoria</h1>
          </article>

          <div className="category-content-box">
            <div className="category-box1">
              <h2 className="addPacote-TitleContainer">Preview</h2>
              <ul className=" Main ViagensTematicas itemsTema">
                <li className="Tema">
                  <div
                    className="Container Img"
                    id="imgPreview"
                    style={{
                      backgroundImage: `url("/assets/img/categoria/")`,
                    }}
                  >
                    <img id="output" />
                    <a
                      id="cardpreview"
                      href="#"
                      style={{ backgroundColor: '#000000aa' }}
                    >
                      <h1 id="h1Preview">Nome Categoria</h1>
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="category-box2">
              <h2 className="addPacote-TitleContainer">
                Adicione/edite a imagem da categoria
              </h2>
              <nav
                className="addPacote-ImgContainer"
                style={{ position: 'relative' }}
              >
                <ul className="addPacote-ImgContainer__Img-list">
                  <input
                    name="imgCategoria"
                    type="file"
                    onChange={loadFile}
                    accept=".jpg"
                  />
                </ul>
              </nav>

              <h2 className="addPacote-TitleContainer">
                Edite as informações da categoria
              </h2>
              <ul className="Pacote-Propriedades">
                <li className="Pacote-Propriedades__Item Pacote-Propriedades__Item--addpack">
                  <label>Nome da Categoria</label>
                  <input
                    type="text"
                    name="nomeCategoria"
                    id="nomeCategoria"
                    onKeyup={mudarTexto}
                    value=""
                    placeholder="Nome Categoria"
                  />
                </li>
                <li className="Pacote-Propriedades__Item Pacote-Propriedades__Item--addpack">
                  <label>Cor da Categoria</label>
                  <input
                    onChange={trocarCor}
                    type="color"
                    name="corCategoria"
                    id="corCategoria"
                    value=""
                    style={({ width: '100px' }, { height: '100px' })}
                  />
                </li>
              </ul>
            </div>
          </div>

          <button
            type="submit"
            title="Criar Pacote"
            className="Pacote__Button-Comprar"
          >
            Adicionar
          </button>
        </form>
      </div>

      
    </>
  );
};

export default CategoriaAdd;
