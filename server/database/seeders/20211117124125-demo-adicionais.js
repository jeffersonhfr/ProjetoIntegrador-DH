'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Adicionais',
      [
        {
          nomeAdicional: 'City Tour',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomeAdicional: 'Piscina Aquecida',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomeAdicional: 'Passeio Cultural',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomeAdicional: 'Jantar no Palacio Real',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Adicionais', null, {});
  },
};
