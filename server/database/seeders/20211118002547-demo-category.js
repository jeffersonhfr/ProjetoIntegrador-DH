'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          nomeCategoria: 'Neve',
          corCategoria: '#d2d2d2aa',
          imagemCategoria: 'img/Neve.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomeCategoria: 'Praia',
          corCategoria: '#34d3e8aa',
          imagemCategoria: 'img/Praia.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomeCategoria: 'Aventura',
          corCategoria: '#69C862aa',
          imagemCategoria: 'img/Aventura.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomeCategoria: 'Romance',
          corCategoria: '#c42e92aa',
          imagemCategoria: 'img/Romantico.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomeCategoria: 'Família',
          corCategoria: '#c42e92aa',
          imagemCategoria: 'img/familia.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nomeCategoria: 'Histórico',
          corCategoria: '#c42e92aa',
          imagemCategoria: 'img/historico.jpg',
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
