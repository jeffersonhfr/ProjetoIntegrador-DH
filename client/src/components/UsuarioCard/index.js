import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UsuarioCard = () => {
  const isLogado = true;
  const isAdmin = true;
  const [user, setUser] = useState([]);

  const openModal = () => {
    document.getElementById("modal").classList.add("modal-active");
    document.body.classList.add("scrollNone");
  };

  function closeModal() {
    document.getElementById("modal").classList.remove("modal-active");
    document.body.classList.remove("scrollNone");
  }
  const { id } = useParams();

  // percorrer usuarios
  useEffect(() => {
    fetch("http://localhost:3333/usuarios")
      .then((res) => res.json())
      .then((res) => setUser(res.user));
  }, []);

  // Delete

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:3333/usuarios/3/delete", {
        method: "delete",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      window.location.href = "/listarUsuarios/";
    } catch (error) {
      console.log(error);
    }
  };

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
                  href={"/visualizarEdit/" + user.id + "/editar"}
                  className="btao-form"
                >
                  <button className="btao-Container__btao-editar listarUsuarios">
                    <i className="bi bi-pencil-fill"></i>
                  </button>
                </a>

                <a onClick={openModal} className="btao-form">
                  <button className="btao-Container__btao-deletar listarUsuarios">
                    <i className="bi bi-trash-fill"></i>
                  </button>
                </a>

                <div className="modal" id="modal">
                  <div className="modal-alert">
                    <div className="modal-conteudo">
                      <h1 className="tituloModal tituloAlert">
                        Deseja realmente excluir esse usuário?
                      </h1>
                      <form
                        onSubmit={handleSubmit}
                        // action={"usuarios/" + user.id + "/delete"}
                      >
                        <button type="submit" className="btao-pacote btn-alert">
                          Sim
                        </button>
                        <a
                          onClick={closeModal}
                          className="btao-pacote btn-cancel"
                        >
                          Não
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </div>
      ))}
    </>
  );
};
export default UsuarioCard;
