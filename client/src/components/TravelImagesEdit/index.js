import React from 'react';
import remove from  './scripts/remove'
const TravelImagesEdit = ({ pacotes }) => {
  return <>
    <img
      src={pacotes.package_Images[0].src}
      className="Pacote-ImgContainer__Img-first"
      id="imagemPrincipal"
    />
    <ul className="Pacote-ImgContainer__Img-list">

      {pacotes.package_Images.map((img)=>{return <>
      
          <li className="imgLi" style={{position: "relative"}}>
            <div className = "imgLiContent">
            <img
              src={img.src}
              className="Pacote-ImgContainer__Img"
              onClick={(e) => {
                document.getElementById('imagemPrincipal').src =
                  img.src;
              }}
            />
            <img src='/assets/img/notcheck.png' onClick={remove} style={
            {
              position:"absolute",
              zIndex:1,
              top: "2px",
              right: '3px',
              width: '22px',
              height:'auto'
            }
            }/>
            </div>
          </li>
       
  
      </>})
      }
    
    </ul>

  </>

};
export default TravelImagesEdit;
