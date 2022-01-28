import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';
import Filtro from '../../components/Filtro';
import TravelCard from '../../components/TravelCard';
import auth from '../../storage/auth';
import userStorage from '../../storage/user';

const Pacotes = () => {
  const [token, setToken] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    const tokenAux = auth.getToken();
    const userAux = userStorage.getUser();
    if (tokenAux) {
      setToken(tokenAux);
    }
    if (userAux) {
      setUser(userAux);
    }
  }, []);

  const [pacotes, setPacotes] = useState();
  const [tituloPacote, setTituloPacote] = useState('');
  useEffect(() => {
    fetch('http://localhost:3333/pacotes')
      .then((res) => res.json())
      .then((res) =>
        setTimeout(() => {
          setPacotes(res.pacotes);
          console.log(pacotes);
          setTituloPacote(res.tituloPacotes);
        }, 1000),
      );
  }, []);

  return !pacotes ? (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 300,
        }}
      >
        <ReactLoading
          type={'bars'}
          color={'#3E60BF'}
          height={120}
          width={120}
        />
      </div>
    </>
  ) : (
    <>
      <div className="container container-pacotes">
        {token && user?.admin ? (
          <>
            <div className="title-bar">
              <h1>{tituloPacote}</h1>
              <Link to="./adicionar" className="travel-cards__btao">
                Adicionar Pacote
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="title-bar">
              <h1>{tituloPacote}</h1>
              <Filtro />
            </div>
          </>
        )}

        <div className="travel-cards">
          {pacotes.map((Pacotes) => {
            return (
              <>
                <TravelCard pacotes={Pacotes} token={token} user={user} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Pacotes;
