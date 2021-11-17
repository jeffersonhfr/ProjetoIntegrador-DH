'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Order, {
        as: 'usuario',
      });
    }
  }
  User.init(
    {
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      senha: DataTypes.STRING,
      nascimento: DataTypes.DATE,
      cpf: DataTypes.INTEGER,
      admin: DataTypes.BOOLEAN,
      avatar: DataTypes.STRING,
      telefone: DataTypes.INTEGER,
      cep: DataTypes.INTEGER,
      logradouro: DataTypes.STRING,
      complemento: DataTypes.STRING,
      localidade: DataTypes.STRING,
      uf: DataTypes.STRING,
      numero: DataTypes.STRING,
    },
    {
      sequelize,
      timestamps: true,
      modelName: 'User',
    },
  );
  return User;
};
