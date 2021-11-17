'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Categoriapacotes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      categoriaAtiva: {
        type: Sequelize.BOOLEAN,
      },
      categoriaPacoteId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Pacotes', key: 'id' },
      },
      categoriaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Categorias', key: 'id' },
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
    await queryInterface.dropTable('Categoriapacotes');
  },
};
