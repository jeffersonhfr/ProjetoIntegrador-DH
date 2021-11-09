'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Pacotes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      diarias: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      hotel: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      passagem_aerea: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      imagem: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      promocao_percent: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      preco: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      parcelas: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      categoria: {
        type: Sequelize.STRING,
        allowNull: false,
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
    await queryInterface.dropTable('Pacotes');
  },
};
