'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Bot_users', {
      
      bot_user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_type_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'User_types',
          key: 'user_type_id'
        }
      },
      tel_user_id: {
        type: Sequelize.INTEGER,
      },
      tel_last_name: {
        type: Sequelize.STRING,
      },
      tel_first_name: {
        type: Sequelize.STRING,
      },
      tel_username: {
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
    return queryInterface.dropTable('Bot_users');
  }
};