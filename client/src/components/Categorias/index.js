import React from "react";
import Categoria from "../Categoria";
import CarouselButton from "../CarouselButton"



const Categorias = ()=>{
    let buttonPrevCat={
      position: "absolute",
      left: "38px",
      top: "707px"
    }
    let buttonNextCat={
      position: "absolute",
      transform: "scalex(-1)",
      right: "38px",
      top: "707px"
    }
    let categorias= [
        {
          nomeCategoria: 'Neve',
          corCategoria: '#d2d2d2',
          imagemCategoria: 'Neve.jpg',
          
        },
        {
          nomeCategoria: 'Praia',
          corCategoria: '#25abbd',
          imagemCategoria: 'Praia.jpg',
          
        },
        {
          nomeCategoria: 'Aventura',
          corCategoria: '#69C862',
          imagemCategoria: 'Aventura.jpg',
          
        },
        {
          nomeCategoria: 'Romance',
          corCategoria: '#c42e92',
          imagemCategoria: 'Romantico.jpg',
          
        },
        {
          nomeCategoria: 'Família',
          corCategoria: '#5b4a70',
          imagemCategoria: 'familia.jpg',
          
        },
        {
          nomeCategoria: 'Histórico',
          corCategoria: '#896d15',
          imagemCategoria: 'historico.jpg',
          
        }
      ]
    
    return <>
      
        <div className="container">
            <nav className="Categoria viagem-tematica">

                <article>
                    <h1 className="title"> Viagens Temáticas</h1>
                    <h2>Separamos os melhores pacotes por temas, escolha o que faz mais o seu estilo</h2>
                </article>

                <div className="container container-cards">
                    
                
                    <CarouselButton style={buttonPrevCat} isPrev={true}/>
                    <ul className=" Main ViagensTematicas itemsTema">

                        {categorias.map((categoria)=>{
                            return <>  
                                <Categoria categoria = {categoria}/>
                            </>})
                            }
                    </ul>
                    <CarouselButton style={buttonNextCat} isPrev={false}/>
                </div>

            </nav>
        </div>
        
    </>;
}


export default Categorias;