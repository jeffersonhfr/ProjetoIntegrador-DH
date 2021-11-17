'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Adicionalpacotes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      adicionalAtivo: {
        type: Sequelize.BOOLEAN,
      },
      adicionalPacoteId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Pacotes', key: 'id' },
      },
      adicionalId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Adicionais', key: 'id' },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Adicionalpacotes');
  },
};
