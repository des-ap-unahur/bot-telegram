'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Polls_roles_access', {
      role_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Roles',
          key: 'role_id'
        }
      },
      poll_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Poll',
          key: 'poll_id'
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
    return queryInterface.dropTable('Poll_roles_access');
  }
};