'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Capacitacaos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      candidato_id: {
        type: Sequelize.INTEGER,
        references: { model: "Candidatos", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      grauDeEscolaridade: {
        type: Sequelize.STRING
      },
      ultimoGrauCursado: {
        type: Sequelize.STRING
      },
      nivelWord: {
        type: Sequelize.STRING
      },
      nivelExcel: {
        type: Sequelize.STRING
      },
      nivelVendasOnline: {
        type: Sequelize.STRING
      },
      nivelDigitacao: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Capacitacaos');
  }
};