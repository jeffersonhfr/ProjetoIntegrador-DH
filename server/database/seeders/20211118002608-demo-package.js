'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Packages',
      [
        {
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
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomePacote: 'Floripa Trip',
          nomeHotel: 'Parada Beach Apart Hotel',
          diarias: 7,
          passagemAerea: 0,
          nacional: 1,
          preco: 2900.0,
          promocaoPorcentagem: 5,
          parcelas: 6,
          sobre:
            'Localizado a apenas 70 metros da Praia dos Ingleses, em Florianópolis, o Parada Beach Apart Hotel oferece apartamentos completos a 3 minutos a pé de supermercados, restaurantes, clínicas médicas e lojas. O Wi-Fi gratuito está à sua disposição. As unidades dispõem de ar-condicionado, cozinha com forno, micro-ondas e área para refeições. Uma geladeira e uma chaleira estão disponíveis. Neste apart-hotel, você pode usufruir de uma churrasqueira. O Shopping Iguatemi Florianópolis fica a 29 km do Parada Beach Apart Hotel. Casais particularmente gostam da localização — eles deram nota 9,2 para viagem a dois.',
          pontoTuristico:
            'Florianópolis é uma cidade para estar ao ar livre. É o lugar ideal para quem quer curtir o mar e paisagens naturais. O visual por toda a ilha é deslumbrante, com muito verde, espaço para trilhas e prática de esportes — é até difícil escolher o melhor passeio ou a praia mais bonita! E por ter mais de 50 km de norte a sul, a cidade abrange bairros com características distintas e muitas, muitas praias! No norte da cidade, as praias costumam ter um mar bem calmo e águas mais quentes, enquanto no leste as ondas são mais fortes e no sul as praias são mais geladas.  Visitando o norte de Floripa, reserve um momento para conhecer praias como Canasvieiras, com águas bem tranquilas e muito frequentada por argentinos, a extensa Praia dos Ingleses, a Praia do Forte, que como o próprio nome já diz tem um antigo forte em suas redondezas que pode ser visitado por dentro, e a querida Jurerê, que ganhou fama com o nome de "Jurerê Internacional" — um trecho da praia muito badalado, com diversos clubs de praia que fervem no verão! Outras praias da região são Daniela e Lagoinha do Norte, cujo mar tem pouca ondulação, e a Praia Brava que, ao contrário, tem ondas fortes e é usada para surf. A Praia do Santinho também é outra boa pedida e tem o diferencial de possuir um morro onde se encontram inscrições rupestres. Na região norte, voltada para a baía que o continente e a ilha formam, fica o Bairro de Santo Antônio de Lisboa, um local pacato e muito antigo que se distingue por ter sido uma das regiões da ilha que recebeu famílias de imigrantes açorianos. Santo Antônio de Lisboa tem bons restaurantes para comer peixes e frutos do mar, então reserve um dia para almoçar na região.  A Lagoa da Conceição, muito charmosa e querida por pessoas que gostam de curtir a vida noturna, é outra atração que recomendamos incluir no roteiro. É uma lagoa tranquila, com margens rasas, que muitas pessoas escolhem para praticar stand up paddle ou para ficar em suas margens curtindo a paisagem. A partir da ponte da Lagoa da Conceição, você pode pegar um barco para conhecer a região da Costa da Lagoa, um bairro localizado entre a encosta de um morro e a lagoa, cujo acesso é feito apenas em embarcação — por ali ficam vários restaurantes, que são ótimos para almoçar acompanhado de um visual estonteante. Para admirar a lagoa, as dunas, faça uma parada no Mirante da Lagoa em um dia de sol, o local rende fotos espetaculares!',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomePacote: 'Paris para Dois',
          nomeHotel: 'Elysees Opera',
          diarias: 20,
          passagemAerea: 1,
          nacional: 0,
          preco: 22800.0,
          promocaoPorcentagem: 7,
          parcelas: 18,
          sobre:
            'Este hotel está situado no 8 distrito de Paris e possui quartos modernos com varanda. A propriedade oferece recepção 24 horas, balcão de turismo e serviço de bilheteria.Os quartos têm isolamento acústico, uma TV de tela plana via satélite e Wi-Fi gratuito. Além disso, todos apresentam uma decoração simples e banheiro privativo com secador de cabelo.Um buffet de café-da-manhã é servido diariamente na sala para refeições do Elysees Opera Hotel. Você pode desfrutar de uma bebida no bar enquanto lê um dos jornais fornecidos.A Estação de Metrô de Roma está a 350 m do Elysees Opera e permite o acesso ao Moulin Rouge. Já o Monceau Park fica apenas a 15 minutos a pé da propriedade. Um serviço de translado para o aeroporto está disponível mediante pedido.Esta é a parte de Paris de que os nossos hóspedes mais gostam, de acordo com avaliações independentes.Casais particularmente gostam da localização — eles deram nota 8,9 para viagem a dois.',
          pontoTuristico:
            'A primeira dica do que fazer em Paris é visitar seus cartões-postais. Comece pela incrível Torre Eiffel, que é simplesmente o maior símbolo de Paris. Ela fica sobre um amplo jardim muito bonito, onde pessoas vão fazer piqueniques, relaxar, ler livros e tirar fotos (até de casamento), curtindo o clima de Paris, que é um dos mais agradáveis da Europa. Você pode comprar antecipadamente o ingresso para subir a torre (até o segundo ou até o terceiro andar, que é mais caro) e pegar uma fila mais rápida, ou deixar para comprar na hora e talvez correr o risco de perder um bom tempo na fila. Vamos citar aqui um site muito bom para comprar todos os ingressos. Visitar a Catedral Notre Dame em Paris. Não deixe de ir à lendária Catedral de Notre Dame. Localizada na praça Parvis, na Île de la Cité, Notre Dame é uma das igrejas mais famosas do mundo. Construída em estilo gótico, a catedral tem mais de 700 anos e é rodeada de mistérios, além de ser super alta. Desde o incêndio que ocorreu em 2019, ela está fechada para visitação. Porém, ainda assim vale a pena vê-la e tirar fotos de seu exterior, que é deslumbrante. Se você se interessar pelo turismo religioso, também pode conhecer a Saint Chapelle, que fica em Île de la Cité e é maravilhosa, com interior colorido e muito mais.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomePacote: 'Rio 40° Graus',
          nomeHotel: 'Atlântico Travel Copacabana',
          diarias: 5,
          passagemAerea: 1,
          nacional: 1,
          preco: 2800.0,
          promocaoPorcentagem: 0,
          parcelas: 6,
          sobre:
            'Você se qualifica para um desconto Genius em Hotel Atlântico Travel Copacabana! Para economizar nesta acomodação, basta fazer o login. Atualmente em fase de pré-inauguração, o Hotel Atlântico Travel fica no Rio de Janeiro, a 500 metros da Praia de Copacabana e 350 metros da Estação de Metrô Siqueira Campos. Para sua comodidade, o WiFi gratuito está disponível em todas as áreas. Decorados em estilo contemporâneo, todos os quartos deste hotel 4 estrelas incluem ar-condicionado, TV de tela plana, frigobar, um banheiro privativo com chuveiro, amenidades de banho de cortesia e secador de cabelo. O Hotel Atlântico Travel Copacabana fica a 3 km da famosa Praia de Ipanema e a 6 km do Aeroporto Santos Dumont. Já o Aeroporto Internacional do Galeão está situado a 25,5 km de distância. Esta é a parte de Rio de Janeiro de que os nossos hóspedes mais gostam, de acordo com avaliações independentes. Casais particularmente gostam da localização — eles deram nota 8,9 para viagem a dois.',
          pontoTuristico:
            'Os pontos turísticos do Rio de Janeiro estão entre os lugares que todo mundo deveria visitar ao menos uma vez na vida. Se você está montando um roteiro para a sua viagem à Cidade Maravilhosa, pode ser interessante conferir as dicas que separamos a seguir, com informações sobre clima, praias, passeios, transporte, e muito mais. Não deixe de conferir também o nosso guia do Rio de Janeiro, com tudo para você planejar uma super viagem à capital carioca! O que fazer no Rio de Janeiro: passeios. É super possível visitar os principais pontos turísticos do Rio de Janeiro por conta própria utilizando transporte público, caminhada, bicicleta ou carros por aplicativo, que não custam muito caro. Ainda assim, caso você queira saber detalhes de cada local dá para contratar o serviço com agências que oferecem passeios guiados. Então nenhuma informação passará em branco. No calçadão da praia de Copacabana, bastante frequentado por turistas, há diversos quiosques além de vendedores abordando pessoas e oferecendo os serviços. Tente negociar algum desconto! É possível encontrar, também, passeios bate-volta para cidades próximas ao Rio, como Arraial do Cabo, que é considerada uma das melhores praias do Brasil, na região dos Lagos.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomePacote: 'Skiando em Bariloche',
          nomeHotel: 'NH Bariloche Edelweiss',
          diarias: 10,
          passagemAerea: 1,
          nacional: 0,
          preco: 7490.0,
          promocaoPorcentagem: 15,
          parcelas: 10,
          sobre:
            'O hotel 4 estrelas Edelweiss dispõe de quartos espaçosos e bem iluminados com vista do Lago Nahuel Huapi e das montanhas cobertas de neve. A propriedade está situada em Bariloche e oferece depósito para esquis. A acomodação fica a 25 minutos de carro da estação de esqui Catedral. O quarto tem entre 20 e 30 m² e apresenta decoração exclusiva. As unidades possuem banheiro amplo, camas confortáveis, TV de tela plana com canais a cabo e outras comodidades de luxo. O NH Bariloche Edelweiss serve buffet de café da manhã variado. O Restaurante La Tavola propõe pratos e vinhos argentinos no almoço e jantar. A acomodação disponibiliza academia e piscina coberta com uma vista incrível do lago. O spa está disponível por um custo extra e abre das 16h30 às 21h. Esta é a parte de San Carlos de Bariloche de que os nossos hóspedes mais gostam, de acordo com avaliações independentes. Casais particularmente gostam da localização — eles deram nota 9,3 para viagem a dois.',
          pontoTuristico:
            'Bariloche, ou San Carlos de Bariloche, no sul da Argentina, é um destino que há anos permeia o imaginário dos brasileiros. A maioria das pessoas pensa apenas em neve quando imagina o lugar, mas Bariloche oferece muito mais do que isso e, inclusive, é um destino excelente para se visitar no verão. Descubra o que fazer em Bariloche, seus passeios e muito mais dicas para planejar sua viagem! A simpática Bariloche uma cidade bem diferente com o passar das estações, seu cenário natural muda dependendo da época do ano em que a viagem é realizada, mas é certo que independentemente da época em que viajar, você encontrará paisagens encantadoras, com direito a montanhas arborizadas, lagos de cores lindas, atividades na natureza e boa gastronomia.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomePacote: 'Disney em Família',
          nomeHotel: 'Liki Tiki Village',
          diarias: 10,
          passagemAerea: 1,
          nacional: 0,
          preco: 12290.0,
          promocaoPorcentagem: 10,
          parcelas: 18,
          sobre:
            'Ocupando uma propriedade de 26 hectares, a apenas 4,8 km do Walt Disney World, este resort possui um parque aquático no local e um campo de golfe em miniatura. As acomodações são espaçosas, têm estilo de apartamento e incluem uma cozinha totalmente equipada.Os condomínios de 1 ou 2 quartos dispõem de um sofá-cama, TV de tela plana a cabo e DVD e CD players. Também incluem máquina de lavar e secadora de roupas. O Liki Tiki Village oferece quadras de tênis e basquete, academia e fliperama. O parque aquático inclui toboáguas, piscina com correnteza e área separada para crianças. O resort conta com balcão de turismo. Você também encontrará áreas para fazer churrasco e piquenique.',
          pontoTuristico:
            'Muita gente vai à Florida e nem imagina tudo o que o sunshine state tem a oferecer. Muito mais do que belas praias na área de Miami ou parques temáticos em Orlando, é possível aproveitar as férias por lá de diversas formas. Quando se fala em Orlando, a Disney é a primeira referência, mas a cidade não se resume aos parques temáticos: a região conta com inúmeras atrações para todo o tipo de público, de todas as idades. Aqui, reunimos alguns dos programas mais legais para quem quer aproveitar um pouco das férias longe do Mickey. Curtir a vista do Orlando Eye, o recém-inaugurado complexo de entretenimento é uma ótima opção para quem quer ficar longe do Mickey. De cima da Orlando Eye, você terá a belíssima vista panorâmica do centro da Flórida. Relaxar nos jardins do Harry P. Leu Gardens. Orlando tem um belíssimo jardim botânico, o Harry P. Leu Gardens. Abrigando a maior coleção de camélias da América do Norte, o local é ideal para quem busca um pouco de paz e tranquilidade durante as férias. Na primavera, a experiência é ainda mais impressionante: nessa época os enormes jardins de rosas estão mais floridos.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Packages', null, {});
  },
};
