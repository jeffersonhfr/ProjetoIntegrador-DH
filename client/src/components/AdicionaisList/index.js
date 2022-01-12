import React from 'react';

const AdicionaisList = ({ adicionais }) => {
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
      <div className="travel-card travel-card__content add-card__content">
        <div className="travel-card__info-box add-card__info-box">
          <div className="travel-card__infoDesc">
            <ul className="Propriedades">
              <li className="usuario-card__propriedade">Nome do Adicional</li>
              <li className="usuario-card__dado">{adicionais.nomeAdicional}</li>
            </ul>
          </div>
        </div>

        {isLogado && isAdmin ? (
          <>
            <div className="btao-Container">
              <a
                href="listarAdicional/<%= adicionais[i].id%>/editar"
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

      <div className="modal" id="modal<%=i%>">
        <div className="modal-alert">
          <div className="modal-conteudo">
            <h1 className="tituloModal tituloAlert">
              Deseja realmente excluir {adicionais.nomeAdicional}?
            </h1>
            <form
              action="listarAdicional/<%= adicionais[i].id%>/delete"
              method="POST"
            >
              <button type="submit" className="btao-pacote btn-alert">
                Sim
              </button>
              <a
                onclick="closeModal<%=i%>()"
                className="btao-pacote btn-cancel"
              >
                Não
              </a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdicionaisList;
