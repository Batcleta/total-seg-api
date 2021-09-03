"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
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
  Curso.init(
    {
      tipoDoCurso: DataTypes.STRING,
      nomeCurso: DataTypes.STRING,
      instituicaoCurso: DataTypes.STRING,
      dataInicioCurso: DataTypes.STRING,
      dataConclusaoCurso: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Curso",
    }
  );
  return Curso;
};
