'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          nomeCategoria: 'Neve',
          corCategoria: '#d2d2d2',
          imagemCategoria: 'Neve.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomeCategoria: 'Praia',
          corCategoria: '#25abbd',
          imagemCategoria: 'Praia.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomeCategoria: 'Aventura',
          corCategoria: '#69C862',
          imagemCategoria: 'Aventura.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomeCategoria: 'Romance',
          corCategoria: '#c42e92',
          imagemCategoria: 'Romantico.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomeCategoria: 'Família',
          corCategoria: '#5b4a70',
          imagemCategoria: 'familia.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomeCategoria: 'Histórico',
          corCategoria: '#896d15',
          imagemCategoria: 'historico.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
