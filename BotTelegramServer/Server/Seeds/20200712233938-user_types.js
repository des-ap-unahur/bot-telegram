'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
   
    return queryInterface.bulkInsert('User_types',[
      {
        type: "S",
        Description: "Estudiante",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "T",
        Description: "Profesor",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "C",
        Description: "Comunidad",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users_types', null, {});
  }
};
