import React from "react";

const Categoria = ({categoria}) =>{

return <>
    
    { 
        <>
            <li class="Tema">
                <div class="Container Img" style={`background-image: url(/assets/img/categoria/${categoria.imagemCategoria });`}>
                    <a href={`/pacotes/?categoria=${categoria.nomeCategoria}`} style={`background-color:${categoria.corCategoria}aa`}>
                         <h1>
                            {categoria.nomeCategoria}
                        </h1>
                    </a>
                </div>
            </li>
  
        </>
    }
    
    </>
} 
export default Categoria