"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Vagas", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      uuid: {
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      vagaEmpresa: {
        type: Sequelize.STRING,
      },
      vagaNome: {
        type: Sequelize.STRING,
      },
      vagaDataLimite: {
        type: Sequelize.DATE,
      },
      vagaDescr: {
        type: Sequelize.STRING,
      },
      vagaRequerIdade: {
        type: Sequelize.BOOLEAN,
      },
      minIdade: {
        type: Sequelize.STRING,
      },
      maxIdade: {
        type: Sequelize.STRING,
      },
      requerExperiencia: {
        type: Sequelize.BOOLEAN,
      },
      tempoExperiencia: {
        type: Sequelize.STRING,
      },
      resideProximo: {
        type: Sequelize.BOOLEAN,
      },
      regimeContrato: {
        type: Sequelize.STRING,
      },
      periodoVaga: {
        type: Sequelize.STRING,
      },
      vagaSalario: {
        type: Sequelize.BOOLEAN,
      },
      salarioInicial: {
        type: Sequelize.STRING,
      },
      salarioLimite: {
        type: Sequelize.STRING,
      },
      vagaRequerCapacitacao: {
        type: Sequelize.BOOLEAN,
      },
      cursoCapacitacao: {
        type: Sequelize.STRING,
      },
      vagaRequerHabilitacao: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      vagaHabilitação: {
        type: Sequelize.STRING,
        allowNull: false,
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
    await queryInterface.dropTable("Vagas");
  },
};
