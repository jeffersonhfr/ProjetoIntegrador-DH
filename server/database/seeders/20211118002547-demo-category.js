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
          nomeCategoria: 'Romance',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomeCategoria: 'Família',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomeCategoria: 'História',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomeCategoria: 'Cultura',
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
