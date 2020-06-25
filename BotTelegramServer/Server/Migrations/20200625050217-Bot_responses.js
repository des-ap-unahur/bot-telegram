'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Bot_responses', {
      
      bot_response_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Bot_users',
          key: 'bot_user_id'
        }
      },
      bot_id: {
        type: Sequelize.INTEGER,
      },
      response: {
        type: Sequelize.STRING,
      },
      description: {
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
