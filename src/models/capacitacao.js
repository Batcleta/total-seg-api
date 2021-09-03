"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Capacitacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Candidato, Curso, Lingua }) {
      // define association here
      this.belongsTo(Candidato, {
        foreignKey: "candidato_id",
        as: "candidato",
      });

      this.hasMany(Curso, {
        foreignKey: "capacita_id",
        as: "cursos",
      });

      this.hasMany(Lingua, {
        foreignKey: "capacita_id",
        as: "linguas",
      });
    }
  }
  Capacitacao.init(
    {
      grauDeEscolaridade: DataTypes.STRING,
      ultimoGrauCursado: DataTypes.STRING,
      nivelWord: DataTypes.STRING,
      nivelExcel: DataTypes.STRING,
      nivelVendasOnline: DataTypes.STRING,
      nivelDigitacao: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Capacitacao",
    }
  );
  return Capacitacao;
};
