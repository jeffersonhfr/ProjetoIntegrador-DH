'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'CategoriaPacotes',
      [
        {
          pacoteId: 1,
          categoriaId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pacoteId: 2,
          categoriaId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pacoteId: 3,
          categoriaId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pacoteId: 3,
          categoriaId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('CategoriaPacotes', null, {});
  },
};
