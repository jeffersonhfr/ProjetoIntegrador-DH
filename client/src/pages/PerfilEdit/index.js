import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';



const  PerfilEdit = ({user})=> {
  return <>
  <Header user={user}/>
  <main class="perfil">
            <div class="perfil__container-top">
                <h1 class="perfil__title">Meu Perfil</h1>
            </div>
            <form class="perfil__dados-do-usuario" action="/Perfil/edit" method="POST">

                <div class="dados-do-usuario__img-container">
                    <img class="img-container__avatar" src={ user.avatar}/>
                    <button class="img-container__btn-enviar-img">Alterar Imagem</button>
                </div>
                <div class="dados-do-usuario__info nome">
                    <label for="nome">
                        <h2 class="info__titulo">Nome Completo</h2>
                    </label>
                    <div class="info__usuario"><input id="nome" name="nome" type="text" value={ user.nome} />
                    </div>
                </div>
                <div class="dados-do-usuario__info email">
                    <label for="email">
                        <h2 class="info__titulo">E-mail</h2>
                    </label>
                    <input id="email" name="email" type="text" value={ user.email} />
                </div>
                <div class="dados-do-usuario__info nascimento">
                    <label for="nascimento">
                        <h2 class="info__titulo">Data de Nascimento</h2>
                    </label>
                    <input id="nascimento" name="nascimento" type="date" value={ user.nascimento} />
                </div>
                <div class="dados-do-usuario__info telefone">
                    <label for="telefone">
                        <h2 class="info__titulo">Telefone</h2>
                    </label>
                    <input id="telefone" name="telefone" type="tel" value={ user.telefone} />
                </div>
                <div class="dados-do-usuario__info cpf">
                    <label for="cpf">
                        <h2 class="info__titulo">CPF</h2>
                    </label>
                    <input id="cpf" name="cpf" type="text" value={ user.cpf} />

                </div>
                <div class="dados-do-usuario__info cep">
                    <label for="cep">
                        <h2 class="info__titulo">CEP</h2>
                    </label>
                    <input id="cep" name="cep" type="text" value={ user.cep} />

                </div>
                <div class="dados-do-usuario__info endereco">
                    <label for="endereco">
                        <h2 class="info__titulo">Endereço</h2>
                    </label>
                    <input id="endereco" name="endereco" type="text" value={ user.logradouro} />
                </div>
                <div class="dados-do-usuario__info complemento">
                    <label for="complemento">
                    <h2 class="info__titulo">Complemento</h2></label>
                    <input id="complemento" name="complemento" type="text" value={ user.complemento} />
                </div>
                <div class="dados-do-usuario__info cidade">
                    <label for="cidade">
                        <h2 class="info__titulo">Cidade</h2>
                    </label>
                    <input id="cidade" name="cidade" type="text" value={ user.localidade} />
                </div>
                <div class="dados-do-usuario__info estado">
                    <label for="estado">
                        <h2 class="info__titulo">Estado</h2>
                    </label>
                    <input id="estado" name="estado" type="text" value={ user.uf} />
                </div>
                <div class="dados-do-usuario__info senha">
                    <label for="senha">
                        <h2 class="info__titulo">Senha</h2>
                    </label>
                    <input id="senha" name="senha" type="password" value="" placeholder="Insira somente para troca" />
                </div>
                <div class="dados-do-usuario__info confirmar">
                    <label for="confirmar">
                        <h2 class="info__titulo">Confirmar Senha</h2>
                    </label>
                    <input id="confirmar" name="confirmar" type="password" value=""
                        placeholder="Insira somente para troca" />
                </div>
                <input class="dados-do-usuario__btn-submit" type="submit" value="Salvar Alterações"/>
            </form>
        </main>
  <Footer/>
  </>
}

export default PerfilEdit;