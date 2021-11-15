'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Categoria',
      [
        {
          nome: 'Romântico',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Neve',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Praia',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Aventura',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Histórico',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Balada',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Familia',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categoria', null, {});
  },
};
