import React from 'react';

const CategoriaList = ({ categoria }) => {
  const isLogado = true;
  const isAdmin = true;

  let valor = (valor) => {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const openModal = () => {
    document.getElementById('modal').classList.add('modal-active');
    document.body.classList.add('scrollNone');
  };

  const closeModal = () => {
    document.getElementById('modal').classList.remove('modal-active');
    document.body.classList.remove('scrollNone');
  };

  return (
    <>
      <div className="travel-card travel-card__content">
        <div className="travel-card__imagem-box">
          <img
            alt="Categoria Imagem"
            src="assets/img/categoria/<%= categoria[i].imagemCategoria%>"
            className="travel-card__imagem"
          />
        </div>
        <div className="travel-card__info-box">
          <div className="travel-card__infoDesc">
            <ul className="Propriedades">
              <li className="usuario-card__propriedade">Nome da Categoria</li>
              <li className="usuario-card__dado">{categoria.nomeCategoria}</li>
              <li className="usuario-card__propriedade">Cor</li>
              <li className="usuario-card__dado">{categoria.corCategoria}</li>
            </ul>
          </div>
        </div>

        {isLogado && isAdmin ? (
          <>
            <div className="btao-Container">
              <a
                href="listarCategoria/<%= categoria[i].id%>/editar"
                className="btao-form"
              >
                <button className="btao-Container__btao-editar listarPacotes">
                  <i className="bi bi-pencil-fill"></i>
                </button>
              </a>
              <a onclick="openModal()" className="btao-form">
                <button className="btao-Container__btao-deletar listarPacotes">
                  <i className="bi bi-trash-fill"></i>
                </button>
              </a>
            </div>
          </>
        ) : null}
      </div>

      <div className="modal" id="modal">
        <div className="modal-alert">
          <div className="modal-conteudo">
            <h1 className="tituloModal tituloAlert">
              Deseja realmente excluir {categoria.nomeCategoria}?
            </h1>
            <form
              action="listarCategoria/<%= categoria[i].id%>/delete"
              method="POST"
            >
              <button type="submit" className="btao-pacote btn-alert">
                Sim
              </button>
              <a onclick="closeModal()" className="btao-pacote btn-cancel">
                Não
              </a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default CategoriaList;
