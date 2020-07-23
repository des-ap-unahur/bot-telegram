'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
    return queryInterface.bulkInsert('Bot_commands',[
      {
        user_type_id: 1,
        command_type_id:8,
        tel_command: "Ayuda",
        name: "Ayuda",
        status: true,
        description:"Los comandos disponibles, son: ",
        parameter:"",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_type_id: 1,
        command_type_id:1,
        tel_command: "Plan_de_estudio",
        name: "Plan de estudio",
        status: true,
        description:"Envio de documento del plan de estudios",
        parameter:"http://www.unahur.edu.ar/sites/default/files/2017-10/Tecnicatura%20Universitaria%20en%20Inform%C3%A1tica.pdf",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_type_id: 2,
        command_type_id:2,
        tel_command: "Ubicacion",
        name: "Ubicacion",
        status: true,
        description:"Ubicación de la universidad",
        parameter:"-34.618246,-58.637199",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_type_id: 1,
        command_type_id:6,
        tel_command: "Start",
        name: "Start",
        status: true,
        description:`
          ¡Bienvenido al botTestUnahur!

          Características (por ahora):
          - Ubicacion de la unahur
          - Programas de carreras
          - Oferta Academica
          - Encuestas
          Recorda que tenes que registrarte para acceder a diferentes 
          acciones!

          *Primero te pido que te registres, podes hacerlo
           apretando aca /registrarme o escribiendo el comando.
        
          *Escribe /ayuda para ver los comando disponibles
        `,
        parameter:"",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_type_id: 1,
        command_type_id:5,
        tel_command: "Registrarme",
        name: "Registrarme",
        status: true,
        description:"Por favor, enviame tu numero para configurar tu usuario.",
        parameter:"Enviar mi numero",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_type_id: 1,
        command_type_id:10,
        tel_command: "Contacto",
        name: "Contacto",
        status: true,
        description:`
          Genial, pudimos verificar tu perfil y quedo de la siguiente manera 
          NOMBRE   ---> :name
          APELLIDO ---> :lastname
          TELEFONO ---> :phone_number
          PERFIL   ---> :user_type
          
          Podes ver las funcionalidades que tenes con /ayuda
        `,
        parameter:"Enviar mi numero",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bot_commands', null, {});
  }
};
