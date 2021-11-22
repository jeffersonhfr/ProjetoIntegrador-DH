'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Addtional_Packages', [
      {
        packageId: 1,
        addtionalId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packageId: 1,
        addtionalId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packageId: 1,
        addtionalId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packageId: 1,
        addtionalId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packageId: 1,
        addtionalId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packageId: 1,
        addtionalId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packageId: 1,
        addtionalId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packageId: 2,
        addtionalId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packageId: 2,
        addtionalId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packageId: 2,
        addtionalId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packageId: 3,
        addtionalId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packageId: 3,
        addtionalId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packageId: 3,
        addtionalId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packageId: 3,
        addtionalId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packageId: 4,
        addtionalId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packageId: 4,
        addtionalId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packageId: 4,
        addtionalId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packageId: 4,
        addtionalId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packageId: 4,
        addtionalId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packageId: 5,
        addtionalId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packageId: 5,
        addtionalId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packageId: 5,
        addtionalId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packageId: 5,
        addtionalId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packageId: 5,
        addtionalId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packageId: 6,
        addtionalId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packageId: 6,
        addtionalId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packageId: 6,
        addtionalId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packageId: 6,
        addtionalId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        packageId: 6,
        addtionalId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Addtional_Packages', null, {});
  },
};
