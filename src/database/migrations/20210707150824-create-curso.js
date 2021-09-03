"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Cursos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      capacita_id: {
        type: Sequelize.INTEGER,
        references: { model: "Capacitacaos", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      tipoDoCurso: {
        type: Sequelize.STRING,
      },
      nomeCurso: {
        type: Sequelize.STRING,
      },
      instituicaoCurso: {
        type: Sequelize.STRING,
      },
      dataInicioCurso: {
        type: Sequelize.STRING,
      },
      dataConclusaoCurso: {
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
    await queryInterface.dropTable("Cursos");
  },
};
