"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Experiencia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Candidato }) {
      // define association here
      this.belongsTo(Candidato, {
        foreignKey: "candidato_id",
        as: "candidato",
      });
    }
  }
  Experiencia.init(
    {
      nomeEmpresa: DataTypes.STRING,
      nomeCargo: DataTypes.STRING,
      UltimoSalario: DataTypes.STRING,
      dataEntrada: DataTypes.DATE,
      dataSaida: DataTypes.DATE,
      motivoSaida: DataTypes.STRING,
      tipoBeneficio: DataTypes.STRING,
      valorBeneficio: DataTypes.STRING,
      tipoBonus: DataTypes.STRING,
      valorBonus: DataTypes.STRING,
      tipoComissao: DataTypes.STRING,
      valorComissao: DataTypes.STRING,
      telefoneEmpresa: DataTypes.STRING,
      ufEmpresa: DataTypes.STRING,
      cidadeEmpresa: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Experiencia",
    }
  );
  return Experiencia;
};
