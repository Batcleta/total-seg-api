"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("candidato_vaga", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      vaga_id: {
        type: Sequelize.INTEGER,
        references: { model: "Vagas", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      candidato_id: {
        type: Sequelize.INTEGER,
        references: { model: "Candidatos", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("candidato_vaga");
  },
};
