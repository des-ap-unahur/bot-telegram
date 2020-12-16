'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bot_nested_commands', [
      {
        bot_father_id: 9,
        bot_child_id: 7,
        createdAt: "2020-11-30T14:10:18.000Z",
        updatedAt: "2020-11-30T14:10:18.000Z"
      },
      {
        bot_nested_command_id: 7,
        bot_father_id: 9,
        bot_child_id: 8,
        createdAt: "2020-11-30T14:10:18.000Z",
        updatedAt: "2020-11-30T14:10:18.000Z"
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bot_nested_commands', null, {});
  }
};