'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Packages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nomePacote: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      nomeHotel: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      diarias: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      passagemAerea: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      nacional: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      preco: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      promocaoPorcentagem: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      parcelas: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      sobre: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      pontoTuristico: {
        allowNull: false,
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable('Packages');
  },
};
