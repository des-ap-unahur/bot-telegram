'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
    return queryInterface.bulkInsert('Bot_commands',[
      {
        user_type_id: 1,
        command_type_id:3,
        tel_command: "ayuda",
        name: "Ayuda",
        status: true,
        description:"ayuda para los usuarios",
        parameter:"",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_type_id: 1,
        command_type_id:1,
        tel_command: "Plan de estudio",
        name: "Plan de estudio",
        status: true,
        description:"Envio de documento del plan de estudios",
        parameter:"",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_type_id: 2,
        command_type_id:1,
        tel_command: "Ubicacion",
        name: "Ubicacion",
        status: true,
        description:"Ubicación de la universidad",
        parameter:"",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bot_commands', null, {});
  }
};
