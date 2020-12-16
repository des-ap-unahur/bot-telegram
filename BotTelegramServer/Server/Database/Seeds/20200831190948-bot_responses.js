'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bot_responses', [
      {
        bot_id: 1,
        response:"Los comandos disponibles, son: ",
        description: "muestra los comandos disponibles",
        parameter: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bot_id: 2,
        response:`
        ¡Bienvenido a info bot! 👋

        Este bot responde a las siguientes consultas:

        - 🗺  Ubicación de la unahur.

        - 📋 Programa de carreras.

        - 📄 Oferta Académica.

        - 📆 Calendario Academico.


        ❗ Primero te pido que te registres, podes hacerlo
         apretando aca /Registrarme o escribiendo el comando.
      
        ❗ Escribe /Ayuda para ver los comando disponibles
        `,
        description: "Comando iniciar muestra una serie de comandos disponibles",
        parameter:"",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bot_id: 3,
        response: "Por favor, enviame tu numero para configurar tu usuario.",
        description: "Envio de numero de user",
        parameter: "Enviar mi numero",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bot_id: 4,
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
        bot_id: 7,
        response: `
        TÍTULO: Técnico/a Universitario/a en Informática
        DURACIÓN: 3 años 
        PERFIL DEL EGRESADO: El egresado (o la egresada) es un técnico universitario cuya área de acción principal es la problemática de la construcción de software, que se corresponde con las tareas tradicionalmente conocidas como diseño y programación o codificación
        Más info: http://unahur.edu.ar/es/tecnicatura-universitaria-informatica
        `,
        description: "Describe duración y perfil de la carrera",
        parameter: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bot_id: 8,
        response: `
        TÍTULO: Licenciado/a en Informática 
        DURACIÓN DE LA CARRERA: 5 años 
        PERFIL DEL EGRESADO: El licenciado en informática de la Universidad Nacional de Hurlingham está enfocado en dar respuestas a necesidades de la sociedad, empresas y organismos a través de procesos de puesta en funcionamiento de herramientas informáticas ya sea desde la construcción de las mismas, como así también desde la adaptación de soluciones existentes, principalmente del ámbito del software libre. Posee una gran formación ética profesional, y una estrecha relación con el sector productivo regional. Con alta capacidad de desarrollo de proyectos propios, está preparado para intervenir en el ámbito público, privado y académico. 
        Más info: http://unahur.edu.ar/es/licenciatura-en-informatica 
        `,
        description: "Describe el perfil de la carrera de grado de Licenciatura",
        parameter: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bot_id: 9,
        response: "Estas son nuestras carreras, elegí una y te contamos sobre ella",
        description: "Describe las opciones de carreras de informática en UNAHUR",
        parameter: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bot_id: 10,
        response: `
        🗓  CALENDARIO ACADÉMICO: Estas son las próximas semanas https://informaticaunahur.github.io/assets-bot/calendario-actual-1.png 
        - Si querés ver el calendario académico completo ingresá en este enlace:  http://unahur.edu.ar/es/calendario-academico`
        ,
        description: "Muestra link al calendario y las semanas más importantes",
        parameter: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bot_id: 11,
        response: "Este es el plan de estudios de la licenciatura en informática",
        description: "Adjunta el PDF del plan de estudios",
        parameter: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bot_id: 12,
        response: "El horario sobre la charla de materias de verano es a las 19 hs.",
        description: "Muestra el horario de la charla respecto a las materias de verano.",
        parameter: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bot_responses', null, {});
  }
};
