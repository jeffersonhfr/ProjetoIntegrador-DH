import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';


 const Perfil = ({user})=> {

  return <>
  <Header user={user}/>
  
  <main class="perfil">
            <div class="perfil__container-top">
                <h1 class="perfil__title">Meu Perfil</h1>
                <div class="perfil__btn-editar"><a href='/perfil/edit'>Editar</a></div>
            </div>
            <div class="perfil__dados-do-usuario">

                <div class="dados-do-usuario__img-container">
                    <img class="img-container__avatar" src={user.avatar}/>
                </div>
                <div class="dados-do-usuario__info nome">
                    <h2 class="info__titulo">Nome Completo</h2>
                    <div class="info__usuario">
                        <p>
                            { user.nome }
                        </p>
                        { user.admin==true ?
                            <div class="usuario__tag-admin">Admin</div>
                            :null}
                    </div>
                </div>
                <div class="dados-do-usuario__info email">
                    <h2 class="info__titulo">E-mail</h2>
                    <p>
                        { user.email }
                    </p>

                </div>
                <div class="dados-do-usuario__info nascimento">
                    <h2 class="info__titulo">Data de Nascimento</h2>
                    <p>
                        { user.nascimento }
                    </p>
                </div>
                <div class="dados-do-usuario__info telefone">
                    <h2 class="info__titulo">Telefone</h2>
                    <p>
                        { user.telefone }
                    </p>
                </div>
                <div class="dados-do-usuario__info cpf">
                    <h2 class="info__titulo">CPF</h2>
                    <p>
                        { user.cpf }
                    </p>

                </div>
                <div class="dados-do-usuario__info cep">
                    <h2 class="info__titulo">CEP</h2>
                    <p>
                        { user.cep }
                    </p>

                </div>
                <div class="dados-do-usuario__info endereco">
                    <h2 class="info__titulo">Endereço</h2>
                    <p>
                        { user.logradouro }
                    </p>

                </div>
                <div class="dados-do-usuario__info">
                    <h2 class="info__titulo">Complemento</h2>
                    <p>
                        { user.complemento }
                    </p>
                </div>
                <div class="dados-do-usuario__info">
                    <h2 class="info__titulo">Cidade</h2>
                    <p>
                        { user.localidade }
                    </p>
                </div>
                <div class="dados-do-usuario__info">
                    <h2 class="info__titulo">Estado</h2>
                    <p>
                        { user.uf }
                    </p>
                </div>
            </div>








        </main>

  
  <Footer/>
  </>
}

export default Perfil;