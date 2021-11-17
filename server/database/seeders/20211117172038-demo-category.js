'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          nomeCategoria: 'Neve',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomeCategoria: 'Praia',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomeCategoria: 'Aventura',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomeCategoria: 'Romântico',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
