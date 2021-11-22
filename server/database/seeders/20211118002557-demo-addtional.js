'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Addtionals',
      [
        {
          nomeAdicional: 'City Tour',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomeAdicional: 'Hotel com Piscina Aquecida',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomeAdicional: 'Jantar no Palácio Real',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomeAdicional: 'Entradas para Museus',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomeAdicional: 'Ingresso para os Parques',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomeAdicional: 'Passeio de Camelo',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomeAdicional: 'Aulas de Surf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomeAdicional: 'Wi-fi Grátis',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomeAdicional: 'Café da Manhã',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomeAdicional: 'Refeição Completa',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Addtionals', null, {});
  },
};
