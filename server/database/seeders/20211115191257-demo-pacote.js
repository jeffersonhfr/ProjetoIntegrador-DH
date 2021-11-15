'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Pacotes',
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
          sobre:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione accusantium natus deleniti ducimus aliquid, consequuntur dolores veniam error porro, rerum dignissimos autem, architecto tempore mollitia atque magnam aliquam doloribus alias',
          pontoTuristico:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione accusantium natus deleniti ducimus aliquid, consequuntur dolores veniam error porro, rerum dignissimos autem, architecto tempore mollitia atque magnam aliquam doloribus alias',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomePacote: 'Paris para dois',
          nomeHotel: 'Hotel Elysees Opera',
          diarias: 20,
          passagemAerea: 1,
          nacional: 0,
          preco: 22000.0,
          promocaoPorcentagem: 5,
          parcelas: 12,
          sobre:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione accusantium natus deleniti ducimus aliquid, consequuntur dolores veniam error porro, rerum dignissimos autem, architecto tempore mollitia atque magnam aliquam doloribus alias',
          pontoTuristico:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione accusantium natus deleniti ducimus aliquid, consequuntur dolores veniam error porro, rerum dignissimos autem, architecto tempore mollitia atque magnam aliquam doloribus alias',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomePacote: 'Floripa Radical',
          nomeHotel: 'Ibis',
          diarias: 7,
          passagemAerea: 0,
          nacional: 1,
          preco: 4000.0,
          promocaoPorcentagem: 10,
          parcelas: 6,
          sobre:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione accusantium natus deleniti ducimus aliquid, consequuntur dolores veniam error porro, rerum dignissimos autem, architecto tempore mollitia atque magnam aliquam doloribus alias',
          pontoTuristico:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione accusantium natus deleniti ducimus aliquid, consequuntur dolores veniam error porro, rerum dignissimos autem, architecto tempore mollitia atque magnam aliquam doloribus alias',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    Example: await queryInterface.bulkDelete('Pacotes', null, {});
  },
};
