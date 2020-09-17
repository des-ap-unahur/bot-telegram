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
        user_type_id: 1,
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
           apretando aca /Registrarme o escribiendo el comando.
        
          *Escribe /Ayuda para ver los comando disponibles
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
          
          Podes ver las funcionalidades que tenes con /Ayuda
        `,
        parameter:"Enviar mi numero",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_type_id: 1,
        command_type_id:4,
        tel_command: "Mail_de_bienvenida",
        name: "Mail de bienvenida",
        status: true,
        description:"Ingrese mail",
        parameter:"Bienvenido al bot telegram UNAHUR",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_type_id: 1,
        command_type_id:3,
        tel_command: "Carreras",
        name: "Carreras",
        status: true,
        description:"Las carreras disponibles son",
        parameter:"Informatica,Fisica,Quimica",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_type_id: 1,
        command_type_id:7,
        tel_command: "Informatica",
        name: "Informatica",
        status: true,
        description:"La carrera de Informática y Sistemas consiste en la gestión, el mantenimiento, el desarrollo y la innovación de todo aquello que engloba el ámbito de la tecnología. Es indispensable que un estudiante de la Ingeniería en Informática posea interés en sistemas informáticos, algoritmos y programación, software, hardware y sistemas de organización de datos.",
        parameter:"",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_type_id: 1,
        command_type_id:7,
        tel_command: "Fisica",
        name: "Fisica",
        status: true,
        description:"La Carrera de Física es una disciplina que se encarga del estudio de la materia, la energía y el movimiento, como también de sus interacciones. Tiene como objetivo conocer al universo y comprender los diferentes fenómenos que en él se manifiestan.",
        parameter:"",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_type_id: 1,
        command_type_id:7,
        tel_command: "Quimica",
        name: "Quimica",
        status: true,
        description:"La Licenciatura en Química forma profesionales capaces para trabajar con sustancias químicas de cualquier tipo y desarrollar trabajos de investigación y tecnológicos en el área. Los Licenciados en Química pueden desempeñarse en laboratorios, industrias y oficinas científico-técnicas.",
        parameter:"",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_type_id: 1,
        command_type_id:11,
        tel_command: "Mail_de_plan_de_estudio",
        name: "Mail de plan de estudio",
        status: true,
        description:"Ingrese mail",
        parameter:"http://www.unahur.edu.ar/sites/default/files/2017-10/Tecnicatura%20Universitaria%20en%20Inform%C3%A1tica.pdf",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_type_id: 1,
        command_type_id:11,
        tel_command: "Mail_de_plan_de_estudio",
        name: "Mail de plan de estudio",
        status: true,
        description:"Ingrese mail",
        parameter:"http://www.unahur.edu.ar/sites/default/files/2017-10/Tecnicatura%20Universitaria%20en%20Inform%C3%A1tica.pdf",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_type_id: 1,
        command_type_id:11,
        tel_command: "Encuestas",
        name: "Encuestas",
        status: true,
        description:"",
        parameter:"",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bot_commands', null, {});
  }
};
