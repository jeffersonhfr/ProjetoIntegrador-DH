'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Addtionals',
      [
        {
          nomeExtra: 'City Tour',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomeExtra: 'Hotel com Piscina Aquecida',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomeExtra: 'Jantar no Palácio Real',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Addtionals', null, {});
  },
};
