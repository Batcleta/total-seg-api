const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Vaga extends Model {
    static associate({ Candidato }) {
      this.belongsToMany(Candidato, {
        foreignKey: "vaga_id",
        through: "candidato_vaga",
        as: "candidatos",
      });
    }
  }

  Vaga.init(
    {
      uuid: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      vagaEmpresa: DataTypes.STRING,
      vagaNome: DataTypes.STRING,
      vagaDataLimite: DataTypes.DATE,
      vagaDescr: DataTypes.STRING,
      vagaRequerIdade: DataTypes.BOOLEAN,
      minIdade: DataTypes.STRING,
      maxIdade: DataTypes.STRING,
      requerExperiencia: DataTypes.BOOLEAN,
      tempoExperiencia: DataTypes.STRING,
      resideProximo: DataTypes.BOOLEAN,
      regimeContrato: DataTypes.STRING,
      periodoVaga: DataTypes.STRING,
      vagaSalario: DataTypes.BOOLEAN,
      salarioInicial: DataTypes.STRING,
      salarioLimite: DataTypes.STRING,
      vagaRequerCapacitacao: DataTypes.BOOLEAN,
      cursoCapacitacao: DataTypes.STRING,
      vagaRequerHabilitacao: DataTypes.BOOLEAN,
      vagaHabilitação: DataTypes.STRING,
    },
    {
      sequelize,
    }
  );
  return Vaga;
};
