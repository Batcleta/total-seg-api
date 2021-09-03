"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("Candidatos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      uuid: {
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      nomeCandidato: {
        type: Sequelize.STRING,
      },
      sobrenomeCandidato: {
        type: Sequelize.STRING,
      },
      dataNascimento: {
        type: Sequelize.STRING,
      },
      sexoCandidato: {
        type: Sequelize.STRING,
      },
      cpfCandidato: {
        type: Sequelize.STRING,
      },
      naturaCandidato: {
        type: Sequelize.STRING,
      },
      estadoCivil: {
        type: Sequelize.STRING,
      },
      religiaoCandidato: {
        type: Sequelize.STRING,
      },
      fumante: {
        type: Sequelize.BOOLEAN,
      },
      possuiPis: {
        type: Sequelize.BOOLEAN,
      },
      possuiTitulo: {
        type: Sequelize.BOOLEAN,
      },
      possuiDispensa: {
        type: Sequelize.BOOLEAN,
      },
      cepCandidato: {
        type: Sequelize.STRING,
      },
      logradouroCandidato: {
        type: Sequelize.STRING,
      },
      numeroEndereco: {
        type: Sequelize.INTEGER,
      },
      bairroCandidato: {
        type: Sequelize.STRING,
      },
      complementoEndereco: {
        type: Sequelize.STRING,
      },
      municipioCandidato: {
        type: Sequelize.STRING,
      },
      ufCandidato: {
        type: Sequelize.STRING,
      },
      quantosFilhos: {
        type: Sequelize.STRING,
      },
      idadeDosFilhos: {
        type: Sequelize.STRING,
      },
      possuiCuidador: {
        type: Sequelize.BOOLEAN,
      },
      categoriaCnh: {
        type: Sequelize.STRING,
      },
      validadeCnh: {
        type: Sequelize.STRING,
      },
      candEmail: {
        type: Sequelize.STRING,
      },
      telefoneFixo: {
        type: Sequelize.STRING,
      },
      candLinkedin: {
        type: Sequelize.STRING,
      },
      candFacebook: {
        type: Sequelize.STRING,
      },
      candInstagram: {
        type: Sequelize.STRING,
      },
      candTwitter: {
        type: Sequelize.STRING,
      },
      comoSoubeDaVaga: {
        type: Sequelize.STRING,
      },
      pretencaoSalarial: {
        type: Sequelize.STRING,
      },
      motivoDaParticipacao: {
        type: Sequelize.STRING,
      },
      nomeDoFuncionarioQueIndicou: {
        type: Sequelize.STRING,
      },
      whatsapp: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Candidatos");
  },
};
