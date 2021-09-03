"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Lingua extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Capacitacao }) {
      // define association here
      this.belongsTo(Capacitacao, {
        foreignKey: "capacita_id",
        as: "capacitacao",
      });
    }
  }
  Lingua.init(
    {
      nomeDaLingua: DataTypes.STRING,
      nivelDeProficiencia: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Lingua",
    }
  );
  return Lingua;
};
