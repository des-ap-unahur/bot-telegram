'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
    return queryInterface.bulkInsert('Command_types',[
      {
        type: "Document",
        Description: "Documento",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "Location",
        Description: "Ubicacion",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "Button",
        Description: "Boton",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "MailText",
        Description: "Mail",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "Registration",
        Description: "Registracion",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "Start",
        Description: "Empezar",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "Text",
        Description: "Texto",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "NestedCommandsList",
        Description: "Lista de comandos anidados ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "NestedCommandsButton",
        Description: "Lista de botones de comandos anidados",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "Contact",
        Description: "Contacto",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "MailDocument",
        Description: "Mail con documento adjunto",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "Poll",
        Description: "Encuestas",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "Help",
        Description: "Comando de ayuda",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Command_types', null, {});
  }
};
