const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Candidato extends Model {
    static associate({ Vaga, Experiencia, Capacitacao }) {
      this.belongsToMany(Vaga, {
        foreignKey: "candidato_id",
        through: "candidato_vaga",
        as: "vagas",
      });

      this.hasMany(Experiencia, {
        foreignKey: "candidato_id",
        as: "experiencias",
      });

      this.hasMany(Capacitacao, {
        foreignKey: "candidato_id",
        as: "capacitações",
      });
    }
  }

  Candidato.init(
    {
      uuid: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      nomeCandidato: DataTypes.STRING,
      sobrenomeCandidato: DataTypes.STRING,
      dataNascimento: DataTypes.STRING,
      sexoCandidato: DataTypes.STRING,
      cpfCandidato: DataTypes.STRING,
      naturaCandidato: DataTypes.STRING,
      estadoCivil: DataTypes.STRING,
      religiaoCandidato: DataTypes.STRING,
      fumante: DataTypes.BOOLEAN,
      possuiPis: DataTypes.BOOLEAN,
      possuiTitulo: DataTypes.BOOLEAN,
      possuiDispensa: DataTypes.BOOLEAN,
      cepCandidato: DataTypes.STRING,
      logradouroCandidato: DataTypes.STRING,
      numeroEndereco: DataTypes.INTEGER,
      bairroCandidato: DataTypes.STRING,
      complementoEndereco: DataTypes.STRING,
      municipioCandidato: DataTypes.STRING,
      ufCandidato: DataTypes.STRING,
      quantosFilhos: DataTypes.STRING,
      idadeDosFilhos: DataTypes.STRING,
      possuiCuidador: DataTypes.BOOLEAN,
      categoriaCnh: DataTypes.STRING,
      validadeCnh: DataTypes.STRING,
      candEmail: DataTypes.STRING,
      telefoneFixo: DataTypes.STRING,
      candLinkedin: DataTypes.STRING,
      candFacebook: DataTypes.STRING,
      candInstagram: DataTypes.STRING,
      candTwitter: DataTypes.STRING,
      comoSoubeDaVaga: DataTypes.STRING,
      pretencaoSalarial: DataTypes.STRING,
      motivoDaParticipacao: DataTypes.STRING,
      nomeDoFuncionarioQueIndicou: DataTypes.STRING,
      whatsapp: DataTypes.STRING,
    },
    {
      sequelize,
    }
  );
  return Candidato;
};
