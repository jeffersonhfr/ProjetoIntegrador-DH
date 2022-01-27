import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";

const VisualizarUsuario = ({}) => {
  const isLogado = true;
  const isAdmin = true;
  const [user, setUser] = useState([]);

  const { id } = useParams();
  const apiURL = "http://localhost:3333/visualizarUsuario/" + id;
  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((res) =>
        setTimeout(() => {
          setUser(res.user[0]);
        })
      );
  }, []);
  console.log(user);
  return (
    <>
      {/* {user.map((user) => ( */}
      <main className="perfil">
        <div className="perfil__container-top">
          <h1 className="perfil__title">Meu Perfil</h1>
          <div className="perfil__btn-editar">
            <a href={"/visualizarUsuario/" + user.id + "/editar"}>Editar</a>
          </div>
        </div>
        <div className="perfil__dados-do-usuario">
          <div className="dados-do-usuario__img-container">
            <img className="img-container__avatar" src={user.avatar} />
          </div>
          <div className="dados-do-usuario__info nome">
            <h2 className="info__titulo">Nome Completo</h2>
            <div className="info__usuario">
              <p>{user.nome}</p>
              {user.admin == true ? (
                <div className="usuario__tag-admin">Admin</div>
              ) : null}
            </div>
          </div>
          <div className="dados-do-usuario__info email">
            <h2 className="info__titulo">E-mail</h2>
            <p>{user.email}</p>
          </div>
          <div className="dados-do-usuario__info nascimento">
            <h2 className="info__titulo">Data de Nascimento</h2>
            <p>{user.nascimento}</p>
          </div>
          <div className="dados-do-usuario__info telefone">
            <h2 className="info__titulo">Telefone</h2>
            <p>{user.telefone}</p>
          </div>
          <div className="dados-do-usuario__info cpf">
            <h2 className="info__titulo">CPF</h2>
            <p>{user.cpf}</p>
          </div>
          <div className="dados-do-usuario__info cep">
            <h2 className="info__titulo">CEP</h2>
            <p>{user.cep}</p>
          </div>
          <div className="dados-do-usuario__info endereco">
            <h2 className="info__titulo">Endereço</h2>
            <p>{user.logradouro}</p>
          </div>
          <div className="dados-do-usuario__info">
            <h2 className="info__titulo">Complemento</h2>
            <p>{user.complemento}</p>
          </div>
          <div className="dados-do-usuario__info">
            <h2 className="info__titulo">Cidade</h2>
            <p>{user.localidade}</p>
          </div>
          <div className="dados-do-usuario__info">
            <h2 className="info__titulo">Estado</h2>
            <p>{user.uf}</p>
          </div>
        </div>
      </main>
      {/* ))} */}

      <Footer />
    </>
  );
};

export default VisualizarUsuario;
