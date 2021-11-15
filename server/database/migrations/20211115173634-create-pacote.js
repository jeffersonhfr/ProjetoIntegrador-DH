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
      },
      diarias: {
        type: Sequelize.SMALLINT,
      },
      hotel: {
        type: Sequelize.STRING,
      },
      nacional: {
        type: Sequelize.SMALLINT,
      },
      passagem_aerea: {
        type: Sequelize.SMALLINT,
      },
      imagem_url: {
        type: Sequelize.STRING,
      },
      promocao_percent: {
        type: Sequelize.INTEGER,
      },
      preco: {
        type: Sequelize.FLOAT,
      },
      parcelas: {
        type: Sequelize.SMALLINT,
      },
      adicionalId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'adicionals',
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
    await queryInterface.dropTable('Pacotes');
  },
};
