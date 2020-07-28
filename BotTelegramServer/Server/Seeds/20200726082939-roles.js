'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Roles', [{
        role: "commands admin",
        description: "Este tipo adm podra tener la alta y baja de comandos",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role: "polls admin",
        description: "Este tipo adm podra tener la alta y baja de las polls",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role: "commands verify",
        description: "Este tipo adm verificara los comandos sugeridos por users",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Roles', null, {});
  }
};