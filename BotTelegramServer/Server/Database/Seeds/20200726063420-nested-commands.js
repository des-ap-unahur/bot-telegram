'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bot_nested_commands', [
      {
        bot_father_id: 9,
        bot_child_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bot_nested_command_id: 7,
        bot_father_id: 9,
        bot_child_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bot_nested_commands', null, {});
  }
};