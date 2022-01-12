import React from 'react';

const TravelCard = ({ usuario }) => {
  return (
    <>
      <div className="travel-card travel-card__content">
        <div className="travel-card__imagem-box">
          <img
            alt="Avatar Usuário"
            src={usuario.avatar}
            className="travel-card__imagem"
          />
        </div>
        <div className="travel-card__info-box">
          <div className="travel-card__infoDesc">
            <ul className="Propriedades">
              <li className="usuario-card__propriedade">Nome</li>
              <li className="usuario-card__dado">{usuario.nome}</li>
              <li className="usuario-card__propriedade">Email </li>
              <li className="usuario-card__dado">{usuario.email}</li>
            </ul>
          </div>
        </div>

        {isLogado && isAdmin ? (
          <>
            <div className="btao-Container">
              <a
                href="/visualizarUsuario/<%= user[i].id %>"
                className="btao-form"
              >
                <button className="btao-Container__btao-visualizar listarUsuarios">
                  <i className="bi bi-eye-fill"></i>
                </button>
              </a>

              <a
                href="/listarUsuarios/<%= user[i].id %>/editar"
                className="btao-form"
              >
                <button className="btao-Container__btao-editar listarUsuarios">
                  <i className="bi bi-pencil-fill"></i>
                </button>
              </a>

              <form
                action="/listarUsuarios/<%= user[i].id %>/delete"
                className="btao-form"
                method="POST"
              >
                <button className="btao-Container__btao-deletar listarUsuarios">
                  <i className="bi bi-trash-fill"></i>
                </button>
              </form>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};
export default TravelCard;
