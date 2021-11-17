'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Adicionalpacotes',
      [
        {
          adicionalAtivo: 1,
          adicionalPacoteId: 1,
          adicionalId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          adicionalAtivo: 1,
          adicionalPacoteId: 2,
          adicionalId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          adicionalAtivo: 1,
          adicionalPacoteId: 3,
          adicionalId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          adicionalAtivo: 1,
          adicionalPacoteId: 3,
          adicionalId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          adicionalAtivo: 1,
          adicionalPacoteId: 2,
          adicionalId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Adicionalpacotes', null, {});
  },
};
