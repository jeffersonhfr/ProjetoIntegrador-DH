'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'ImagensPacotes',
      [
        {
          pacoteId: 1,
          imagemId: 1,
          CreatedAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pacoteId: 1,
          imagemId: 4,
          CreatedAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pacoteId: 2,
          imagemId: 2,
          CreatedAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pacoteId: 2,
          imagemId: 6,
          CreatedAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pacoteId: 3,
          imagemId: 4,
          CreatedAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pacoteId: 3,
          imagemId: 5,
          CreatedAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ImagensPacotes', null, {});
  },
};
