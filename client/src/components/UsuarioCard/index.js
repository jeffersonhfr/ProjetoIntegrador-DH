import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UsuarioCard = ({ usuario }) => {
  const isLogado = true;
  const isAdmin = true;
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/listarUsuarios")
      .then((res) => res.json())
      .then((res) => setUser(res.user));
  }, []);

  return (
    <>
      {user.map((user) => (
        <div className="travel-card travel-card__content">
          <div className="travel-card__imagem-box">
            <img
              alt="Avatar Usuário"
              src={user.avatar}
              className="travel-card__imagem"
            />
          </div>
          <div className="travel-card__info-box">
            <div className="travel-card__infoDesc">
              <ul className="Propriedades">
                <li className="usuario-card__propriedade">Nome</li>
                <li className="usuario-card__dado">{user.nome}</li>
                <li className="usuario-card__propriedade">Email </li>
                <li className="usuario-card__dado">{user.email}</li>
              </ul>
            </div>
          </div>

          {isLogado && isAdmin ? (
            <>
              <div className="btao-Container">
                <a href={"/visualizarUsuario/" + user.id} className="btao-form">
                  <button className="btao-Container__btao-visualizar listarUsuarios">
                    <i className="bi bi-eye-fill"></i>
                  </button>
                </a>

                <a
                  href={"/visualizarUsuario/" + user.id + "/editar"}
                  className="btao-form"
                >
                  <button className="btao-Container__btao-editar listarUsuarios">
                    <i className="bi bi-pencil-fill"></i>
                  </button>
                </a>

                <form
                  action={"/visualizarUsuario/" + user.id + "/delete"}
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
      ))}
    </>
  );
};
export default UsuarioCard;
