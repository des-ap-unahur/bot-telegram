'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Guarani_users', [
      {
        dni: "41988138",
        email: "agustin120000@gmail.com",
        profile: "Estudiante",
        phone_number: "1123141056",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dni: "32988138",
        email: "Jonathan.agustin.fds@gmail.com",
        profile: "Estudiante",
        phone_number: "1150069598",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dni: "31988138",
        email: "cristiansaldivia775@gmail.com",
        profile: "Docente",
        phone_number: "1161311076",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dni: "17261762",
        email: "informatica@unahur.edu.ar",
        phone_number: "1154993391",
        profile: "Estudiante",
        createdAt: new Date(),
        updatedAt: new Date()
    }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Guarani_data', null, {});
  }
};