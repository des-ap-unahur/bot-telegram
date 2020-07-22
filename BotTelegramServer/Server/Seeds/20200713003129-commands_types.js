'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
    return queryInterface.bulkInsert('Command_types',[
      {
        type: "D",
        Description: "Documento",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "U",
        Description: "Ubicacion",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "B",
        Description: "Boton",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "M",
        Description: "Mail",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "R",
        Description: "Registracion",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "S",
        Description: "Start",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "T",
        Description: "Texto",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "H",
        Description: "Ayuda",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Command_types', null, {});
  }
};
