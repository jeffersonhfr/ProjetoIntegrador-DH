import React from 'react';

const TravelImages = ({ pacote }) => {
  return (
    <>
      <img
        src={pacote.package_images[0].src}
        className="Pacote-ImgContainer__Img-first"
        id="imagemPrincipal"
      />
      <ul className="Pacote-ImgContainer__Img-list">
        {pacote.package_images.map((img) => {
          return (
            <>
              <li>
                <img
                  src={img.src}
                  className="Pacote-ImgContainer__Img"
                  onClick={(e) => {
                    document.getElementById('imagemPrincipal').src = img.src;
                  }}
                />
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};
export default TravelImages;
