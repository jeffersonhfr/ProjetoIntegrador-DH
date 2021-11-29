'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('package_Images', {
      packageId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'packages',
          key: 'id',
        },
      },
      src: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('package_Images');
  }
};