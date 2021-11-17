'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Categoriapacotes',
      [
        {
          categoriaAtiva: 1,
          categoriaPacoteId: 1,
          categoriaId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoriaAtiva: 1,
          categoriaPacoteId: 2,
          categoriaId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoriaAtiva: 1,
          categoriaPacoteId: 3,
          categoriaId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoriaAtiva: 1,
          categoriaPacoteId: 3,
          categoriaId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categoriapacotes', null, {});
  },
};
