'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Adicionals',
      [
        {
          nome: 'City Tour',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Translado',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Piscina',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Piscina Aquecida',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Ar Condicionado',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Academia',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Banheira',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Jacuzzi',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'U$ 50 em fichas',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Adicionals', null, {});
  },
};
