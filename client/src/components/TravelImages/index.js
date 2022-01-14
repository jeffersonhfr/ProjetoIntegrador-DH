import React from 'react';

const TravelImages = ({ pacotes }) => {
  return <>
    <img
      src={pacotes.package_Images[0].src}
      className="Pacote-ImgContainer__Img-first"
      id="imagemPrincipal"
    />
    <ul className="Pacote-ImgContainer__Img-list">

      {pacotes.package_Images.map((img)=>{return <>
      
          <li>
            <img
              src={img.src}
              className="Pacote-ImgContainer__Img"
              onClick={(e) => {
                document.getElementById('imagemPrincipal').src =
                  img.src;
              }}
            />
          </li>
       
  
      </>})
      }
    
    </ul>

  </>

};
export default TravelImages;
