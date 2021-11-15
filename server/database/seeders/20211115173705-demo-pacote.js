'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Pacotes',
      [
        {
          nome: 'Egito Histórico',
          diarias: 10,
          hotel: 'Marriott Mena House',
          nacional: 0,
          passagem_aerea: 1,
          imagem_url: '/assets/gim/Egito.jpg',
          promocao_percent: 10,
          preco: 18.8,
          parcelas: 10,
          adicionalId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Pacotes', null, {});
  },
};
