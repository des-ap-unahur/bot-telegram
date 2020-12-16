'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bot_response_files', [
      {
        bot_response_id: 9,
        filename: "PlanLicenciatura",
        description: "Adjunta el PDF del plan de estudios",
        url: "https://informaticaunahur.github.io/assets-bot/Plan%20de%20Estudios-Licenciatura-Informatica-v6.1.pdf",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bot_response_files', null, {});
  }
};
