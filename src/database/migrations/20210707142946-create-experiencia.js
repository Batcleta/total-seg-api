"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Experiencia", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      candidato_id: {
        type: Sequelize.INTEGER,
        references: { model: "Candidatos", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      nomeEmpresa: {
        type: Sequelize.STRING,
      },
      nomeCargo: {
        type: Sequelize.STRING,
      },
      UltimoSalario: {
        type: Sequelize.STRING,
      },
      dataEntrada: {
        type: Sequelize.DATE,
      },
      dataSaida: {
        type: Sequelize.DATE,
      },
      motivoSaida: {
        type: Sequelize.STRING,
      },
      tipoBeneficio: {
        type: Sequelize.STRING,
      },
      valorBeneficio: {
        type: Sequelize.STRING,
      },
      tipoBonus: {
        type: Sequelize.STRING,
      },
      valorBonus: {
        type: Sequelize.STRING,
      },
      tipoComissao: {
        type: Sequelize.STRING,
      },
      valorComissao: {
        type: Sequelize.STRING,
      },
      telefoneEmpresa: {
        type: Sequelize.STRING,
      },
      ufEmpresa: {
        type: Sequelize.STRING,
      },
      cidadeEmpresa: {
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
    await queryInterface.dropTable("Experiencia");
  },
};
