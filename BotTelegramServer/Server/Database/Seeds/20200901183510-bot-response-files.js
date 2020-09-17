'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Bot_response_files', [
      {
        bot_respose_files_id: 1,
        bot_response_id: 6,
        filename: "Programa Tecnicatura Universitaria en informatica",
        description: "Archivo en formato pdf del programa de la carrera Tec. Univ. en informatica",
        url: "http://www.unahur.edu.ar/sites/default/files/2017-10/Tecnicatura%20Universitaria%20en%20Inform%C3%A1tica.pdf",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Bot_response_files', null, {});

  }
};
