'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Bot_nested_commands', {
      
      bot_father_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Bot_commands',
          key: 'bot_command_id'
        }
      },
      bot_child_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Bot_commands',
          key: 'bot_command_id'
        }
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
    return queryInterface.dropTable('Bot_nested_commands');
  }
};