import React from 'react';

const TravelImages = ({ pacotes }) => {
  return (
    <>
      <img
        src={pacotes.package_Images[0].src}
        className="Pacote-ImgContainer__Img-first"
        id="imagemPrincipal"
      />
      <ul className="Pacote-ImgContainer__Img-list">
        {pacotes.package_Images[0] ? (
          <>
            <li>
              <img
                src={pacotes.package_Images[0].src}
                className="Pacote-ImgContainer__Img"
                onClick={(e) => {
                  document.getElementById('imagemPrincipal').src =
                    pacotes.package_Images[0].src;
                }}
              />
            </li>
          </>
        ) : null}

        {pacotes.package_Images[1] ? (
          <>
            <li>
              <img
                src={pacotes.package_Images[1].src}
                className="Pacote-ImgContainer__Img"
                onClick={(e) => {
                  document.getElementById('imagemPrincipal').src =
                    pacotes.package_Images[1].src;
                }}
              />
            </li>
          </>
        ) : null}

        {pacotes.package_Images[2] ? (
          <>
            <li>
              <img
                src={pacotes.package_Images[2].src}
                className="Pacote-ImgContainer__Img"
                onClick={(e) => {
                  document.getElementById('imagemPrincipal').src =
                    pacotes.package_Images[2].src;
                }}
              />
            </li>
          </>
        ) : null}

        {pacotes.package_Images[3] ? (
          <>
            <li>
              <img
                src={pacotes.package_Images[3].src}
                className="Pacote-ImgContainer__Img"
                onClick={(e) => {
                  document.getElementById('imagemPrincipal').src =
                    pacotes.package_Images[3].src;
                }}
              />
            </li>
          </>
        ) : null}

        {pacotes.package_Images[4] ? (
          <>
            <li>
              <img
                src={pacotes.package_Images[4].src}
                className="Pacote-ImgContainer__Img"
                onClick={(e) => {
                  document.getElementById('imagemPrincipal').src =
                    pacotes.package_Images[4].src;
                }}
              />
            </li>
          </>
        ) : null}

        {pacotes.package_Images[5] ? (
          <>
            <li>
              <img
                src={pacotes.package_Images[5].src}
                className="Pacote-ImgContainer__Img"
                onClick={(e) => {
                  document.getElementById('imagemPrincipal').src =
                    pacotes.package_Images[5].src;
                }}
              />
            </li>
          </>
        ) : null}

        {pacotes.package_Images[6] ? (
          <>
            <li>
              <img
                src={pacotes.package_Images[6].src}
                className="Pacote-ImgContainer__Img"
                onClick={(e) => {
                  document.getElementById('imagemPrincipal').src =
                    pacotes.package_Images[6].src;
                }}
              />
            </li>
          </>
        ) : null}
      </ul>
    </>
  );
};
export default TravelImages;
