'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Bot_susc_users', {
      
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Bot_users',
          key: 'bot_user_id'
        }
      },
      dni: {
        type: Sequelize.INTEGER,
      },
      fname: {
        type: Sequelize.STRING,
      },
      lname: {
        type: Sequelize.STRING,
      },
      date_suscribe: {
        type: Sequelize.DATE,
      },
      verified: {
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
    return queryInterface.dropTable('Bot_susc_users');
  }
};
