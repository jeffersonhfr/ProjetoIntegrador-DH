'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'AdicionalPacotes',
      [
        {
          pacoteId: 1,
          adicionalId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pacoteId: 1,
          adicionalId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pacoteId: 2,
          adicionalId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pacoteId: 3,
          adicionalId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pacoteId: 3,
          adicionalId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('AdicionalPacotes', null, {});
  },
};
