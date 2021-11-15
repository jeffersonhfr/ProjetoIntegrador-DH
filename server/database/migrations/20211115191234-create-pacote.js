'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Pacotes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomePacote: {
        type: Sequelize.STRING
      },
      nomeHotel: {
        type: Sequelize.STRING
      },
      diarias: {
        type: Sequelize.INTEGER
      },
      passagemAerea: {
        type: Sequelize.INTEGER
      },
      nacional: {
        type: Sequelize.INTEGER
      },
      preco: {
        type: Sequelize.INTEGER
      },
      promocaoPorcentagem: {
        type: Sequelize.INTEGER
      },
      parcelas: {
        type: Sequelize.INTEGER
      },
      sobre: {
        type: Sequelize.STRING
      },
      pontoTuristico: {
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
    await queryInterface.dropTable('Pacotes');
  }
};