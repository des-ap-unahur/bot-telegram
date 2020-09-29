'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Bot_commands', {
      bot_command_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      command_type_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Command_types',
          key: 'command_type_id'
        }
      },
      user_type_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'User_types',
          key: 'user_type_id'
        }
      },
      tel_command: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.BOOLEAN,
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
    return queryInterface.dropTable('Bot_commands');
  }
};