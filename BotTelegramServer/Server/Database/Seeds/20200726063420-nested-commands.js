'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bot_nested_commands', [
      {
        bot_father_id: 8,
        bot_child_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bot_father_id: 8,
        bot_child_id: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bot_father_id: 8,
        bot_child_id: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bot_nested_commands', null, {});
  }
};