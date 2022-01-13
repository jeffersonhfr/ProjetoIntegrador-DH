import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import sobrenos from 'json-loader!./sobrenos.json'



const Sobre = ({ user }) => {
    const [isLogado] = useState(user != null);
    const [isAdmin] = useState(user.admin === 1);

    const {tituloPrincipal,tituloHistoria,textoHistoria} = JSON.parse(sobrenos)

    return <>
        <Header user={user} />

        <section class="sobre">
            <div class="container">
                <div class="sobre-container">
                    <div class="sobre-container__nav">
                        <h1 id="sobre">
                            {tituloPrincipal}
                        </h1>

                        {isLogado && isAdmin === 'true' ?
                            <a href="/sobre/editar" class="bt-edit">Editar</a> : null
                        }
                    </div>
                    <span id="historia"></span>
                    <h2>
                        {tituloHistoria}
                    </h2>
                    <p>
                        {textoHistoria}
                    </p>
                </div>

                <div class="formulario" id="fale">
                    <h2>Fale Conosco:</h2>
                    <form name="form">

                        <div class="campos_form">
                            <label for="nome">Nome</label>
                            <input id="nome" type="text" required />
                        </div>

                        <div class="campos_form">
                            <label for="email">E-mail</label>
                            <input id="email" type="email" required />
                        </div>

                        <div class="campos_form">
                            <label for="mensagem">Mensagem</label>
                            <textarea id="mensagem" name="mensagem" rows="14" cols="50"></textarea>
                        </div>
                        <div class="campos_form">
                            <button type="submit" class="btao-enviar">Enviar</button>
                        </div>
                    </form>

                </div>
            </div>
        </section>

        <Footer />
    </>
}

export default Sobre;