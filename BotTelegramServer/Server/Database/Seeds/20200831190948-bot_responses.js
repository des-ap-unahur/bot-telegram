'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bot_responses', [
      {
        bot_response_id: 1,
        bot_id: 1,
        response: "Respuesta que puede ser un comando",
        description: "desription",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bot_response_id: 2,
        bot_id: 2,
        response: "Respuesta que puede ser un comando2",
        description: "desription2",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bot_responses', null, {});
  }
};
