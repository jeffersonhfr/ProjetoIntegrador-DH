import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
const PerfilEdit = ({ tokenUser }) => {
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [complemento, setComplemento] = useState('');
  const [localidade, setLocalidade] = useState('');
  const [uf, setUf] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setCofirmarSenha] = useState('');

  const id = tokenUser.id;
  const apiURL = 'http://localhost:3333/visualizarUsuario/' + id;
  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((res) =>
        setTimeout(() => {
          setUser(res.user);
          setEmail(res.user.email);
          setNome(res.user.nome);
          setTelefone(res.user.telefone);
          setCpf(res.user.cpf);
          setCep(res.user.cep);
          setLogradouro(res.user.logradouro);
          setNascimento(res.user.nascimento);
          setComplemento(res.user.complemento);
          setLocalidade(res.user.localidade);
          setUf(res.user.uf);
          setSenha(res.user.senha);
        }),
      );
  }, []);

  //   Form

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(
        'http://localhost:3333/visualizarUsuario/' + id + '/edit',
        {
          method: 'put',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            senha,
            confirmarSenha,
            uf,
            localidade,
            complemento,
            nascimento,
            logradouro,
            cep,
            cpf,
            telefone,
            nome,
          }),
        },
      );
      //res = await res.json();
      //   auth.setToken(res.token);
      window.location.href = '/perfil';
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <main className="perfil">
        <div className="perfil__container-top">
          <h1 className="perfil__title">Meu Perfil</h1>
        </div>
        <form onSubmit={handleSubmit} className="perfil__dados-do-usuario">
          <div className="dados-do-usuario__img-container">
            <img className="img-container__avatar" src={user.avatar} />
            <button className="img-container__btn-enviar-img">
              Alterar Imagem
            </button>
          </div>
          <div className="dados-do-usuario__info nome">
            <label htmlFor="nome">
              <h2 className="info__titulo">Nome Completo</h2>
            </label>
            <div className="info__usuario">
              <input
                id="nome"
                name="nome"
                type="text"
                placeholder={user.nome}
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
          </div>
          <div className="dados-do-usuario__info email">
            <label htmlFor="email">
              <h2 className="info__titulo">E-mail</h2>
            </label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder={user.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="dados-do-usuario__info nascimento">
            <label htmlFor="nascimento">
              <h2 className="info__titulo">Data de Nascimento</h2>
            </label>
            <input
              id="nascimento"
              name="nascimento"
              type="date"
              placeholder={user.nascimento}
              value={nascimento}
              onChange={(e) => setNascimento(e.target.value)}
            />
          </div>
          <div className="dados-do-usuario__info telefone">
            <label htmlFor="telefone">
              <h2 className="info__titulo">Telefone</h2>
            </label>
            <input
              id="telefone"
              name="telefone"
              type="tel"
              placeholder={user.telefone}
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </div>
          <div className="dados-do-usuario__info cpf">
            <label htmlFor="cpf">
              <h2 className="info__titulo">CPF</h2>
            </label>
            <input
              id="cpf"
              name="cpf"
              type="text"
              placeholder={user.cpf}
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
          </div>
          <div className="dados-do-usuario__info cep">
            <label htmlFor="cep">
              <h2 className="info__titulo">CEP</h2>
            </label>
            <input
              id="cep"
              name="cep"
              type="text"
              placeholder={user.cep}
              value={cep}
              onChange={(e) => setCep(e.target.value)}
            />
          </div>
          <div className="dados-do-usuario__info endereco">
            <label htmlFor="endereco">
              <h2 className="info__titulo">Endereço</h2>
            </label>
            <input
              id="endereco"
              name="endereco"
              type="text"
              placeholder={user.logradouro}
              value={logradouro}
              onChange={(e) => setLogradouro(e.target.value)}
            />
          </div>
          <div className="dados-do-usuario__info complemento">
            <label htmlFor="complemento">
              <h2 className="info__titulo">Complemento</h2>
            </label>
            <input
              id="complemento"
              name="complemento"
              type="text"
              placeholder={user.complemento}
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
            />
          </div>
          <div className="dados-do-usuario__info cidade">
            <label htmlFor="cidade">
              <h2 className="info__titulo">Cidade</h2>
            </label>
            <input
              id="cidade"
              name="cidade"
              type="text"
              placeholder={user.localidade}
              value={localidade}
              onChange={(e) => setLocalidade(e.target.value)}
            />
          </div>
          <div className="dados-do-usuario__info estado">
            <label htmlFor="estado">
              <h2 className="info__titulo">Estado</h2>
            </label>
            <input
              id="estado"
              name="estado"
              type="text"
              placeholder={user.uf}
              value={uf}
              onChange={(e) => setUf(e.target.value)}
            />
          </div>
          <div className="dados-do-usuario__info senha">
            <label htmlFor="senha">
              <h2 className="info__titulo">Senha</h2>
            </label>
            <input
              id="senha"
              name="senha"
              type="password"
              value={senha}
              placeholder="Insira somente para troca"
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <div className="dados-do-usuario__info confirmar">
            <label htmlFor="confirmar">
              <h2 className="info__titulo">Confirmar Senha</h2>
            </label>
            <input
              id="confirmar"
              name="confirmar"
              type="password"
              value={confirmarSenha}
              placeholder="Insira somente para troca"
              onChange={(e) => setCofirmarSenha(e.target.value)}
            />
          </div>
          <input
            className="dados-do-usuario__btn-submit"
            type="submit"
            value="Salvar Alterações"
          />
        </form>
      </main>
      <Footer />
    </>
  );
};

export default PerfilEdit;
