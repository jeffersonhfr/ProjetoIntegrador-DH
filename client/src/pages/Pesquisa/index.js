import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { useLocation } from 'react-router-dom';
import TravelCard from '../../components/TravelCard';

const Pesquisa = () => {
  function useQuery() {
    const { search } = useLocation();
    return search;
  }

  const query = useQuery();
  let queryString = query.replace('?onde=', '').toUpperCase();

  let [pacote, setPacote] = useState('');
  useEffect(() => {
    fetch('http://localhost:3333/pesquisa' + query)
      .then((res) => res.json())
      .then((res) =>
        setTimeout(() => {
          setPacote(res.pacotes);
          console.log(res.pacotes);
        }, 800),
      );
  }, []);

  return !pacote ? (
    <>
      {/* {pacotes[0].nomePacote} */}
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
        <div className="title-bar">
          <h1>Resultados da pesquisa: {queryString}</h1>
        </div>
        <div className="travel-cards">
          {pacote == '' ? (
            <div
              className="container container-historico container-historico-null"
              style={{ margin: '0 auto' }}
            >
              <div className="box1">
                <h1>Não encontramos nenhuma viagem para o local desejado.</h1>
                <h2>
                  Você pode buscar novamente, ou acessar diretamente pelo menu
                  Nossos Pacotes e conferir nossas ofertas.
                </h2>
              </div>
              <div className="box2">
                <img src="/assets/img/busca.png" width="100%" alt="" />
              </div>
            </div>
          ) : (
            <>
              {pacote.map((Pacotes) => {
                return (
                  <>
                    <TravelCard pacotes={Pacotes} />
                  </>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Pesquisa;
