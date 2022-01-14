
import React from 'react';
import TravelImagesEdit from '../../components/TravelImagesEdit'


// import { Container } from './styles';

const PacoteEdit = () => {
  let pacote = {
    nomePacote: 'Egito Histórico',
    nomeHotel: 'Marriott Mena House',
    diarias: 10,
    passagemAerea: 1,
    nacional: 0,
    preco: 18800.0,
    promocaoPorcentagem: 30,
    parcelas: 10,
    sobre:
      'Com vista das Grandes Pirâmides de Gizé, o Marriott Mena House, Cairo está rodeado por 16 hectares de jardins verdes e possui spa, academia e piscina. Os quartos são decorados com móveis artesanais.Todas as acomodações no Marriott Mena House, Cairo dispõem de ar-condicionado, tecidos luxuosos, área de estar e TV LCD. Cada quarto e suíte oferece um banheiro privativo espaçoso com roupão de banho e chinelos. O café da manhã é servido na sala de refeições com vista do jardim. As opções gastronômicas incluem especialidades italianas no Restaurante Alfredo, enquanto o buffet de café da manhã diário é servido no 139 Pavilion, que também conta com coquetéis e vista inesquecível. As instalações de lazer incluem uma piscina aquecida, situada nos jardins paisagísticos. As Pirâmides de Gizé ficam a menos de 500 metros do Marriott Mena House. O concierge poderá organizar passeios de cavalos e camelos para as pirâmides. O Aeroporto do Cairo está a 30,6 km do local.Casais particularmente gostam da localização — eles deram nota 9,5 para viagem a dois.',
    pontoTuristico:
      'Para quem procura por experiências marcantes e inesquecíveis durante as férias uma  viagem para o Egito é a resposta. O país localizado no nordeste da África possui uma história riquíssima e monumentos grandiosos – não à toa está presente em quase todos os livros de história.O Egito fica a mais de 10 mil quilômetros de distância do Brasil, os voos saindo de São Paulo costumam ter pelo menos uma escala e a viagem mais rápida demora cerca de 17h 30m. Como a conexão é feita em cidades como Istambul e Dubai, muitos turistas aproveitam para conhecê-las também.No país africano as principais cidades a serem visitadas são a capital Cairo, Luxor, Aswan e Sharm el Sheikh. Cada uma delas possui características particulares e pontos turísticos de visita obrigatória que vão além de templos e sarcófagos. Conheça alguns deles. Pirâmides de Gizé (Cairo) Essa é o ponto turístico mais conhecido do Cairo e de todo o Egito. Um dos mais antigos monumentos, o conjunto Pirâmides de Gizé fica a 18 km da capital e o acesso é fácil. Agências de turismo oferecem passeios diurnos e noturnos, esse último inclui um espetáculo de luzes e som. As principais pirâmides em que faraós foram mumificados e sepultados são as de Quéops, Quéfren e Miquerinos. A primeira é a maior delas, com 140 metros de altura e 230 metros de base. Além delas, a Grande Esfinge chama atenção. Khan el-Khalili Bazaar (Cairo) A antiga área comercial fica no coração de Cairo e é um grande bazar a céu aberto que reúne cafés, restaurantes e lojas de especiarias, joias, tecidos, artesanatos, perfumes, alimentos, entre outros. Além de ser uma forma de mergulhar na cultura local, visitar as ruelas do Khan el-Khalili Bazaar também é viver a história, já que o local, fundado no século XIV, transformou Cairo em um centro importante do comércio ao permitir comerciantes estrangeiros exporem suas mercadorias. O Khan el-Khalili Bazaar está incluso em vários pacotes de turismo oferecidos por agências – inclusive, essa é a melhor forma de conhecer o local sem se perder. O pacote da Memphis Tours, por exemplo, disponibiliza guias que falam a língua portuguesa, o que torna o passeio ainda mais proveitoso.',
    categoria: [{
      id: 1,
      nomeCategoria: 'Neve',
      corCategoria: '#d2d2d2',
      imagemCategoria: 'Neve.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }],
    adicional: [{
      id: 1,
      nomeAdicional: 'City Tour',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      nomeAdicional: 'Hotel com Piscina Aquecida',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      nomeAdicional: 'Jantar no Palácio Real',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 4,
      nomeAdicional: 'Entradas para Museus',
      createdAt: new Date(),
      updatedAt: new Date(),
    }],
    package_Images: [{
      packageId: 1,
      src: '/assets/img/package/Egito.jpg',
      alt: 'Fotos do Egito',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      packageId: 1,
      src: '/assets/img/package/egito1.jpg',
      alt: 'Fotos do Egito',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      packageId: 1,
      src: '/assets/img/package/egito2.jpg',
      alt: 'Fotos do Egito',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      packageId: 1,
      src: '/assets/img/package/egito3.jpg',
      alt: 'Fotos do Egito',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      packageId: 1,
      src: '/assets/img/package/egito4.jpg',
      alt: 'Fotos do Egito',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      packageId: 1,
      src: '/assets/img/package/egito5.jpg',
      alt: 'Fotos do Egito',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      packageId: 1,
      src: '/assets/img/package/egito6.jpg',
      alt: 'Fotos do Egito',
      createdAt: new Date(),
      updatedAt: new Date(),
    }],
    createdAt: new Date(),
    updatedAt: new Date(),
  }
  const categorias = [
    {
      id: 1,
      nomeCategoria: 'Neve',
      corCategoria: '#d2d2d2',
      imagemCategoria: 'Neve.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      nomeCategoria: 'Praia',
      corCategoria: '#25abbd',
      imagemCategoria: 'Praia.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      nomeCategoria: 'Aventura',
      corCategoria: '#69C862',
      imagemCategoria: 'Aventura.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 4,
      nomeCategoria: 'Romance',
      corCategoria: '#c42e92',
      imagemCategoria: 'Romantico.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 5,
      nomeCategoria: 'Família',
      corCategoria: '#5b4a70',
      imagemCategoria: 'familia.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 6,
      nomeCategoria: 'Histórico',
      corCategoria: '#896d15',
      imagemCategoria: 'historico.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]

  const adicionais = [
    {
      id: 1,
      nomeAdicional: 'City Tour',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      nomeAdicional: 'Hotel com Piscina Aquecida',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      nomeAdicional: 'Jantar no Palácio Real',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 4,
      nomeAdicional: 'Entradas para Museus',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 5,
      nomeAdicional: 'Ingresso para os Parques',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nomeAdicional: 'Passeio de Camelo',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 6,
      nomeAdicional: 'Aulas de Surf',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 7,
      nomeAdicional: 'Wi-fi Grátis',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 8,
      nomeAdicional: 'Café da Manhã',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 9,
      nomeAdicional: 'Refeição Completa',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]

  

  let loadFile = (e) => { console.log(e) };

  return <>

    <div className="container" >
      <form action="" method="POST" className='addPacote' encType="multipart/form-data">
        <article className='addPacote-TitleContainer'>
          <h1 className='addPacote-TitleContainer'>Editar Pacote</h1>
        </article>

        <h2 className='addPacote-TitleContainer'>Imagens</h2>
        <nav className='addPacote-ImgContainer' style={{ position: "relative" }}>


          <div className="listagemFoto" >
            <nav className="Pacote-ImgContainer">


              <TravelImagesEdit pacotes={pacote} />


            </nav>

          </div>
          <ul className='addPacote-ImgContainer__Img-list'>

            <li className="listagemFoto">
              <h2>Imagem 01</h2>
              <input type="file" name="imagem" accept="image/png, image/jpeg" onChange={loadFile} style={{ display: "none" }} />
            </li>

          </ul>
        </nav>

        <h2 className='addPacote-TitleContainer'>Adicione as informações sobre o pacote</h2>
        <ul className="Pacote-Propriedades">
          <li className="Pacote-Propriedades__Item Pacote-Propriedades__Item--addpack">
            <label>Nome Pacote</label>
            <input type="text" name="nomePacote" id="nomePacote" readOnly value={pacote.nomePacote} />
          </li>
          <li className="Pacote-Propriedades__Item Pacote-Propriedades__Item--addpack">
            <label>Nome do Hotel</label>
            <input type="text" name="nomeHotel" id="nomeHotel" readOnly value={pacote.nomeHotel} />
          </li>
          <li className="Pacote-Propriedades__Item Pacote-Propriedades__Item--addpack Titulo">
            <label>Diárias</label>
            <input type="number" name="diarias" id="diarias" readOnly value={pacote.diarias} />
          </li>
          <li className="Pacote-Propriedades__Item Pacote-Propriedades__Item--addpack">
            <label>Destino:</label>

            {pacote.nacional == 1 ?
              <div className="radio-box">
                <div className="radio-opt">
                  <input type="radio" name="nacional" id="nacional" readOnly value="1" defaultChecked /> Nacional
                </div>
                <div className="radio-opt">
                  <input type="radio" name="nacional" id="nacional" readOnly value="0" /> Internacional
                </div>
              </div>

              :
              <div className="radio-box">
                <div className="radio-opt">
                  <input type="radio" name="nacional" id="nacional" readOnly value="1" /> Nacional
                </div>
                <div className="radio-opt">
                  <input type="radio" name="nacional" id="nacional" readOnly value="0" defaultChecked /> Internacional
                </div>
              </div>
            }
          </li>
          <li className="Pacote-Propriedades__Item Pacote-Propriedades__Item--addpack">
            <label>Passagem Aérea:</label>

            {pacote.passagemAerea == 1 ?
              <div className="radio-box">
                <div className="radio-opt">
                  <input type="radio" name="passagemAerea" id="passagemAerea" readOnly value="1" defaultChecked /> Sim
                </div>
                <div className="radio-opt">
                  <input type="radio" name="passagemAerea" id="passagemAerea" readOnly value="0" /> Não
                </div>
              </div>
              :
              <div className="radio-box">
                <div className="radio-opt">
                  <input type="radio" name="passagemAerea" id="passagemAerea" readOnly value="1" /> Sim
                </div>
                <div className="radio-opt">
                  <input type="radio" name="passagemAerea" id="passagemAerea" readOnly value="0" defaultChecked /> Não
                </div>
              </div>
            }
          </li>


          <li className="Pacote-Propriedades__Item Pacote-Propriedades__Item--addpack">
            <label htmlFor="adicionais">Adicionais</label>
            <div className="checkbox-div">
              {adicionais.map((e) => {
                return <div className="checkbox-opt">{

                  pacote.adicional.find((i) => i.id === e.id)
                    ?
                    <input type="checkbox" name="adicionais" id="adicionais" readOnly value={e.id} readOnly
                      defaultChecked /> : <input type="checkbox" name="adicionais" id="adicionais" readOnly value={e.id} readOnly
                    />}
                  {e.nomeAdicional}
                </div>
              })}
            </div>

          </li>
          <br />
          <li className="Pacote-Propriedades__Item Pacote-Propriedades__Item--addpack">
            <label htmlFor="categorias">Categorias</label>
            <div className="checkbox-div">
              {categorias.map((e) => {
                return <div className="checkbox-opt"> {
                  pacote.categoria.find((i) => i.id === e.id)
                    ?
                    <input type="checkbox" name="categorias" id="categorias" readOnly value={e.id} defaultChecked />
                    : <input type="checkbox" name="categorias" id="categorias" readOnly value={e.id} />}
                  {e.nomeCategoria}
                </div>
              })
              }
            </div>
          </li>
        </ul>







        <h2 className='addPacote-TitleContainer'>Adicione os dados financeiros</h2>
        <ul className="Pacote-Propriedades">
          <li className="Pacote-Propriedades__Item Pacote-Propriedades__Item--addpack">
            <label>Valor do Pacote</label>
            <input type="text" name="preco" id="preco" readOnly value={pacote.preco} placeholder="ex.: 19990.00 - R$ 19.990,00" />
          </li>
          <li className="Pacote-Propriedades__Item Pacote-Propriedades__Item--addpack">
            <label>Percentual de desconto</label>
            <input type="text" name="promocaoPorcentagem" readOnly value={pacote.promocaoPorcentagem} id="promocaoPorcentagem" placeholder="ex. 10" />
          </li>
          <li className="Pacote-Propriedades__Item Pacote-Propriedades__Item--addpack Titulo">
            <label>Número máximo de parcelas</label>
            <input type="number" name="parcelas" id="parcelas" readOnly value={pacote.parcelas} />
          </li>
        </ul>

        <h2 className='addPacote-TitleContainer'>Adicione as descrições sobre o pacote e local</h2>
        <ul className="Pacote-Propriedades">
          <li className="Pacote-Propriedades__Item Pacote-Propriedades__Item--addpack">
            <label>Sobre o Destino</label>
            <textarea name="sobre" id="sobre" cols="30" rows="10" readOnly defaultValue={pacote.sobre} />
          </li>
          <li className="Pacote-Propriedades__Item Pacote-Propriedades__Item--addpack">
            <label>Pontos Turísticos</label>
            <textarea name="pontoTuristico" id="pontoTuristico" cols="30" rows="10" readOnly defaultValue={pacote.pontoTuristico} />
          </li>
        </ul>

        <button type="submit" title="Criar Pacote" className="Pacote__Button-Comprar">Editar</button>
      </form>
    </div>

  </>
}

export default PacoteEdit;