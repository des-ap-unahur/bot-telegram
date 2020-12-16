'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
    return queryInterface.bulkInsert('Bot_commands',[
      {
        user_type_id: 3,
        command_type_id:13,
        tel_command: "Ayuda",
        name: "Ayuda",
        description:"",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_type_id: 3,
        command_type_id:6,
        tel_command: "Start",
        name: "Start",
        description:"",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_type_id: 3,
        command_type_id:5,
        tel_command: "Registrarme",
        name: "Registrarme",
        description:"",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_type_id: 3,
        command_type_id:10,
        tel_command: "Contacto",
        name: "Contacto",
        description:"",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_type_id: 1,
        command_type_id:12,
        tel_command: "Encuestas",
        name: "Encuestas",
        status: true,
        description:"",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_type_id: 2,
        command_type_id:12,
        tel_command: "Encuestas",
        name: "Encuestas",
        status: true,
        description:"",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_type_id: 3,
        tel_command: "Tecnicatura_Universitaria_en_Informatica",
        description: "Describe duración y perfil de la carrera",
        command_type_id: 7,
        name: "Perfil Tecnicatura",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_type_id: 3,
        tel_command: "Licenciatura_en_Informatica",
        description: "Describe el perfil de la carrera de grado de Licenciatura",
        command_type_id: 7,
        name: "Perfil Licenciatura",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_type_id: 3,
        tel_command: "Que_se_estudia_en_UNAHUR_informatica",
        description: "Describe las opciones de carreras de informática en UNAHUR",
        command_type_id: 8,
        name: "Carreras de Infomática",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_type_id: 1,
        tel_command: "Calendario_academico",
        description: "Muestra link al calendario y las semanas más importantes",
        command_type_id: 7,
        name: "Calendario Académico",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_type_id: 1,
        tel_command: "Plan_estudios_Licenciatura",
        description: "Adjunta el PDF del plan de estudios",
        command_type_id: 1,
        name: "Plan Licenciatura",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bot_commands', null, {});
  }
};

/*
    {
        "bot_command_id": 26,
        "user_type_id": 1,
        "tel_command": "Plan_estudios_Licenciatura",
        "description": "Adjunta el PDF del plan de estudios",
        "command_type_id": 1,
        "name": "Plan Licenciatura",
        "status": true,
        "createdAt": "2020-11-30T19:52:19.000Z",
        "updatedAt": "2020-11-30T19:52:19.000Z",
        "commandsTypes": {
            "command_type_id": 1,
            "type": "Document",
            "description": "Documento",
            "createdAt": "2020-11-27T22:18:16.000Z",
            "updatedAt": "2020-11-27T22:18:16.000Z"
        },
        "userTypes": {
            "user_type_id": 1,
            "type": "S",
            "description": "Estudiante",
            "createdAt": "2020-11-27T22:18:16.000Z",
            "updatedAt": "2020-11-27T22:18:16.000Z"
        },
        "botNestedCommands": [],
        "botResponses": {
            "bot_response_id": 25,
            "bot_id": 26,
            "response": "Este es el plan de estudios de la licenciatura en informática",
            "description": "Adjunta el PDF del plan de estudios",
            "parameter": "",
            "createdAt": "2020-11-30T19:52:19.000Z",
            "updatedAt": "2020-11-30T19:52:19.000Z",
            "botResponseFiles": {
                "bot_respose_files_id": 5,
                "bot_response_id": 25,
                "filename": "PlanLicenciatura",
                "description": "Adjunta el PDF del plan de estudios",
                "url": "https://informaticaunahur.github.io/assets-bot/Plan%20de%20Estudios-Licenciatura-Informatica-v6.1.pdf",
                "createdAt": "2020-11-30T19:52:20.000Z",
                "updatedAt": "2020-11-30T19:52:20.000Z"
            }
        }
    },
    {
        "bot_command_id": 31,
        "user_type_id": 2,
        "tel_command": "Charla_Materias_de_verano",
        "description": "Muestra el horario de la charla respecto a las materias de verano.",
        "command_type_id": 7,
        "name": "Charla sobre materias de verano",
        "status": true,
        "createdAt": "2020-12-15T03:09:05.000Z",
        "updatedAt": "2020-12-16T04:22:06.000Z",
        "commandsTypes": {
            "command_type_id": 7,
            "type": "Text",
            "description": "Texto",
            "createdAt": "2020-11-27T22:18:16.000Z",
            "updatedAt": "2020-11-27T22:18:16.000Z"
        },
        "userTypes": {
            "user_type_id": 2,
            "type": "T",
            "description": "Profesor",
            "createdAt": "2020-11-27T22:18:16.000Z",
            "updatedAt": "2020-11-27T22:18:16.000Z"
        },
        "botNestedCommands": [],
        "botResponses": {
            "bot_response_id": 30,
            "bot_id": 31,
            "response": "El horario sobre la charla de materias de verano es a las 19 hs.",
            "description": "Muestra el horario de la charla respecto a las materias de verano.",
            "parameter": "",
            "createdAt": "2020-12-15T03:09:05.000Z",
            "updatedAt": "2020-12-15T03:09:05.000Z",
            "botResponseFiles": null
        }
    }
*/