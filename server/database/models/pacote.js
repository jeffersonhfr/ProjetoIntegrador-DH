'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pacote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pacote.belongsTo(models.Adicional, {
        foreignKey: 'adicionalId',
        as: 'adicional',
      });
    }
  }
  Pacote.init(
    {
      nome: DataTypes.STRING,
      diarias: DataTypes.SMALLINT,
      hotel: DataTypes.STRING,
      nacional: DataTypes.SMALLINT,
      passagem_aerea: DataTypes.SMALLINT,
      imagem_url: DataTypes.STRING,
      promocao_percent: DataTypes.INTEGER,
      preco: DataTypes.FLOAT,
      parcelas: DataTypes.SMALLINT,
      adicionalId: DataTypes.INTEGER,
    },
    {
      sequelize,
      timestamps: true,
      modelName: 'Pacote',
    },
  );
  return Pacote;
};
