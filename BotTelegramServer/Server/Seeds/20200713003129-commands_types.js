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
        type: "L",
        Description: "Lista",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Command_types', null, {});
  }
};
