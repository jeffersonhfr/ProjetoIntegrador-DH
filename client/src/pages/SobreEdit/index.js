import React from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import * as sobrenos from './sobrenos.json'

const SobreEdit = () =>{
  return <>
  
  const {tituloPrincipal,tituloHistoria,textoHistoria} = sobrenos
  
  <section class="ajuda ajuda-edit">
      <div class="container">
        <div class="ajuda-container">
          <form action="" method="post" class="form-edit">
            <label for="tituloPrincipal">Título Principal</label>
            <input type="text" name="tituloPrincipal" value={ tituloPrincipal } class="form-titulo"/>
         

            <label for="tituloHistoria">Título para a história da empresa</label>
            <input type="text" name="tituloHistoria" value={ tituloHistoria } class="form-campos"/>

            <label for="textoHistoria">Texto informativo sobre a história da empresa</label>
            <textarea name="textoHistoria" class="form-campos form-textarea">{ textoHistoria }</textarea>

            <button type="submit" class="form-btn">Confirmar alterações</button>
          </form>

        </div>
      </div>
    </section>

  
  </>
}

export default SobreEdit;