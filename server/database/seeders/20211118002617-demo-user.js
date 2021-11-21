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
          cpf: '333.444.555-66',
          nascimento: '1976/08/27',
          admin: 1,
          avatar: '/assets/img/Aventura.jpg',
          telefone: '(31)99999999',
          cep: 12345654,
          logradouro: 'Rua Queijin',
          numero: '34-b',
          complemento: 'casa 3',
          localidade: 'Belo Horizonte',
          uf: 'MG',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Fabiano Matoso',
          email: 'fabiano@gmail.com',
          senha: '$2b$10$yX.Wc/ikv6tLLzlo71sQou.4vDQotyRX8AYL473B2NQvsR166nYHO',
          cpf: '333.444.555-66',
          nascimento: '1936/08/27',
          admin: 0,
          avatar: '/assets/img/Aventura.jpg',
          telefone: '(47)999999999',
          cep: 12345654,
          logradouro: 'Rua da Praia',
          numero: '3142',
          complemento: 'Casa Amarela',
          localidade: 'Florianópolis',
          uf: 'SC',
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
