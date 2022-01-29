import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';
import Filtro from '../../components/Filtro';
import TravelCard from '../../components/TravelCard';

const Pacotes = ({ tokenAdmin, tokenUser }) => {
  const [pacotes, setPacotes] = useState();
  const [tituloPacote, setTituloPacote] = useState('');
  useEffect(() => {
    fetch('http://localhost:3333/pacotes')
      .then((res) => res.json())
      .then((res) =>
        setTimeout(() => {
          setPacotes(res.pacotes);
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
        {tokenAdmin && tokenUser?.admin ? (
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
                <TravelCard
                  pacotes={Pacotes}
                  token={tokenAdmin}
                  user={tokenUser}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Pacotes;
