'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Poll_responses', {
      
      poll_response_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        foreingKey:true,
        unique: true,
        type: Sequelize.INTEGER
      },
      response_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Poll_questions',
          key: 'poll_question_id'
        }
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
    return queryInterface.dropTable('Poll_responses');
  }
};