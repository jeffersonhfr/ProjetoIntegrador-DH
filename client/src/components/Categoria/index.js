import React from "react";

const Categoria = ({categoria}) =>{
  
  ///  import imagemCategoria from `../../../public/assets/img/categoria/${categoria.imagemCategoria}`
return <>
    
    { 
        <>
            <li class="Tema">
                {<div class="Container Img" style={{backgroundImage: `url(/assets/img/categoria/${categoria.imagemCategoria})`}}>
                    <a href={`/pacotes/?categoria=${categoria.nomeCategoria}`} style={{backgroundColor :`${categoria.corCategoria}aa`}}>
                         <h1>
                            {categoria.nomeCategoria}
                        </h1>
                    </a>
                </div>}
            </li>
  
        </>
    }
    
</>
} 
export default Categoria