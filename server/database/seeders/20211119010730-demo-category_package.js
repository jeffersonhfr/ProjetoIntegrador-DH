'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Category_Packages',
      [
        {
          packageId: 1,
          categoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          packageId: 2,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          packageId: 2,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          packageId: 2,
          categoryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          packageId: 3,
          categoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          packageId: 3,
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          packageId: 4,
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          packageId: 4,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          packageId: 4,
          categoryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          packageId: 5,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          packageId: 5,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          packageId: 5,
          categoryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          packageId: 6,
          categoryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          packageId: 6,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Category_Packages', null, {});
  },
};
