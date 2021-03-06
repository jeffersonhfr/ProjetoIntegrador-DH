'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Orders',
      [
        {
          userId: 1,
          packageId: 1,
          valor: '18800.0',
          parcelamento: 2,
          formaPagamento: 'Cartão de Crédito',
          status: 'Pagamento aprovado',
          pedidoAtivo: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          packageId: 2,
          valor: '18800.0',
          parcelamento: 2,
          formaPagamento: 'Cartão de Crédito',
          status: 'Pagamento aprovado',
          pedidoAtivo: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          packageId: 1,
          valor: '18800.0',
          parcelamento: 2,
          formaPagamento: 'Cartão de Crédito',
          status: 'Pagamento aprovado',
          pedidoAtivo: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          packageId: 3,
          valor: '18800.0',
          parcelamento: 2,
          formaPagamento: 'Cartão de Crédito',
          status: 'Pagamento aprovado',
          pedidoAtivo: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Orders', null, {});
  },
};
