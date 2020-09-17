'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bot_responses', [
      {
        bot_response_id: 1,
        bot_id: 9,
        response: "La carrera de Informática y Sistemas consiste en la gestión, el mantenimiento, el desarrollo y la innovación de todo aquello que engloba el ámbito de la tecnología. Es indispensable que un estudiante de la Ingeniería en Informática posea interés en sistemas informáticos, algoritmos y programación, software, hardware y sistemas de organización de datos.",
        description: "Descripcion de la carrera Informatica",
        parameter:"",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bot_response_id: 2,
        bot_id: 10,
        response: "La Carrera de Física es una disciplina que se encarga del estudio de la materia, la energía y el movimiento, como también de sus interacciones. Tiene como objetivo conocer al universo y comprender los diferentes fenómenos que en él se manifiestan.",
        description: "Descripcion de la carrera Fisica",
        parameter:"",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bot_response_id: 3,
        bot_id: 11,
        response: "La Licenciatura en Química forma profesionales capaces para trabajar con sustancias químicas de cualquier tipo y desarrollar trabajos de investigación y tecnológicos en el área. Los Licenciados en Química pueden desempeñarse en laboratorios, industrias y oficinas científico-técnicas.",
        description: "Descripcion de la carrera Lic. Quimica",
        parameter:"",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bot_response_id: 4,
        bot_id: 4,
        response:`
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
        description: "Comando iniciar muestra una serie de comandos disponibles",
        parameter:"",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bot_response_id: 5,
        bot_id: 3,
        response: "Ubicación de la universidad",
        description: "Ubicación de la universidad",
        parameter:"-34.618246,-58.637199",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bot_response_id: 6,
        bot_id: 2,
        response: "plan de estudios Tec.universitaria en informatica",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bot_response_id: 7,
        bot_id: 5,
        response: "Por favor, enviame tu numero para configurar tu usuario.",
        description: "Envio de numero de user",
        parameter: "Enviar mi numero",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bot_response_id: 8,
        bot_id: 7,
        response: "Ingrese mail.",
        description: "se le pide al usuario que ingrese un mail",
        parameter: "Bienvenido al bot telegram UNAHUR",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bot_response_id: 9,
        bot_id: 12,
        response: "Ingrese mail.",
        description: "Se manda al usuario un mail con el pdf del programa",
        parameter: "http://www.unahur.edu.ar/sites/default/files/2017-10/Tecnicatura%20Universitaria%20en%20Inform%C3%A1tica.pdf",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bot_response_id: 10,
        bot_id: 6,
        response:`
        Genial, pudimos verificar tu perfil y quedo de la siguiente manera 
        NOMBRE   ---> :name
        APELLIDO ---> :lastname
        TELEFONO ---> :phone_number
        PERFIL   ---> :user_type
        
        Podes ver las funcionalidades que tenes con /Ayuda
      `,
        description: "Se manda al usuario como quedo su perfil",
        parameter: "Enviar mi numero",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bot_response_id: 11,
        bot_id: 8,
        response:"Las carreras disponibles son",
        description: "botones con las carreras",
        parameter: "Informatica,Fisica,Quimica",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bot_response_id: 12,
        bot_id: 1,
        response:"Los comandos disponibles, son: ",
        description: "muestra los comandos disponibles",
        parameter: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bot_responses', null, {});
  }
};
