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
        type: Sequelize.STRING,
      },
      nomeHotel: {
        type: Sequelize.STRING,
      },
      diarias: {
        type: Sequelize.INTEGER,
      },
      passagemAerea: {
        type: Sequelize.BOOLEAN,
      },
      nacional: {
        type: Sequelize.BOOLEAN,
      },
      preco: {
        type: Sequelize.INTEGER,
      },
      promocaoPorcentagem: {
        type: Sequelize.INTEGER,
      },
      parcelas: {
        type: Sequelize.INTEGER,
      },
      imagemCapa: {
        type: Sequelize.STRING,
      },
      imagem01: {
        type: Sequelize.STRING,
      },
      imagem02: {
        type: Sequelize.STRING,
      },
      imagem03: {
        type: Sequelize.STRING,
      },
      imagem04: {
        type: Sequelize.STRING,
      },
      imagem05: {
        type: Sequelize.STRING,
      },
      imagem06: {
        type: Sequelize.STRING,
      },
      sobre: {
        type: Sequelize.STRING,
      },
      pontoTuristico: {
        type: Sequelize.STRING,
      },
      addtionalId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'addtionals',
          key: 'id',
        },
      },
      categoryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'categories',
          key: 'id',
        },
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
