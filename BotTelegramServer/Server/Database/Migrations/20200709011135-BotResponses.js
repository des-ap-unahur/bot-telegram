'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Bot_responses', {
      bot_response_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      bot_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Bot_commands',
          key: 'bot_command_id'
        }
      },
      response: {
        type: Sequelize.TEXT('medium'),
      },
      description: {
        type: Sequelize.STRING,
      },
      parameter: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Bot_responses');
  }
};