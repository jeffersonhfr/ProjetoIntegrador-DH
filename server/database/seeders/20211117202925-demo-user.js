'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          nome: 'Adriana Silva',
          email: 'adriana@viagem.com',
          senha: '$2b$10$yX.Wc/ikv6tLLzlo71sQou.4vDQotyRX8AYL473B2NQvsR166nYHO',
          cpf: '33344455566',
          admin: 1,
          avatar: '/assets/img/Aventura.jpg',
          telefone: 3199999999,
          cep: 12345654,
          logradouro: 'Rua Queijin',
          numero: '34-b',
          complemento: 'casa 3',
          localidade: 'Belo Horizonte',
          uf: 'MG',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
