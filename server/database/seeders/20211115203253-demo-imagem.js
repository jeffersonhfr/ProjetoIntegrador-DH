'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Imagems',
      [
        {
          url: '/assets/img/Egito.jpg',
          capa: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: '/assets/img/floripa.jpg',
          capa: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: '/assets/img/paris.jpg',
          capa: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: '/assets/img/Aventura.jpg',
          capa: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: '/assets/img/Las-Vegas.jpg',
          capa: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: '/assets/img/Maldivas.jpg',
          capa: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Imagems', null, {});
  },
};
