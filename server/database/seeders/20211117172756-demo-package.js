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
          promocaoPorcentagem: 0,
          parcelas: 10,
          imagemCapa: '/assets/img/Egito.jpg',
          imagem01: '',
          imagem02: '',
          imagem03: '',
          imagem04: '',
          imagem05: '',
          imagem06: '',
          sobre:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione accusantium natus deleniti ducimus aliquid, consequuntur dolores veniam error porro, rerum dignissimos autem, architecto tempore mollitia atque magnam aliquam doloribus alias',
          pontoTuristico:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione accusantium natus deleniti ducimus aliquid, consequuntur dolores veniam error porro, rerum dignissimos autem, architecto tempore mollitia atque magnam aliquam doloribus alias',
          addtionalId: 1,
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomePacote: 'Floripa',
          nomeHotel: 'Ibis',
          diarias: 7,
          passagemAerea: 0,
          nacional: 1,
          preco: 4000.0,
          promocaoPorcentagem: 0,
          parcelas: 10,
          imagemCapa: '/assets/img/Egito.jpg',
          imagem01: '',
          imagem02: '',
          imagem03: '',
          imagem04: '',
          imagem05: '',
          imagem06: '',
          sobre:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione accusantium natus deleniti ducimus aliquid, consequuntur dolores veniam error porro, rerum dignissimos autem, architecto tempore mollitia atque magnam aliquam doloribus alias',
          pontoTuristico:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione accusantium natus deleniti ducimus aliquid, consequuntur dolores veniam error porro, rerum dignissimos autem, architecto tempore mollitia atque magnam aliquam doloribus alias',
          addtionalId: 2,
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomePacote: 'Paris',
          nomeHotel: 'Hotel Elysees Opera',
          diarias: 20,
          passagemAerea: 1,
          nacional: 0,
          preco: 22800.0,
          promocaoPorcentagem: 0,
          parcelas: 10,
          imagemCapa: '/assets/img/Egito.jpg',
          imagem01: '',
          imagem02: '',
          imagem03: '',
          imagem04: '',
          imagem05: '',
          imagem06: '',
          sobre:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione accusantium natus deleniti ducimus aliquid, consequuntur dolores veniam error porro, rerum dignissimos autem, architecto tempore mollitia atque magnam aliquam doloribus alias',
          pontoTuristico:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione accusantium natus deleniti ducimus aliquid, consequuntur dolores veniam error porro, rerum dignissimos autem, architecto tempore mollitia atque magnam aliquam doloribus alias',
          addtionalId: 1,
          categoryId: 1,
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
