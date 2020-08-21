'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Poll_questions', [{
        poll_id: 1,
        question: "De manera general, ¿que horario de cursada preferis?",
        description: "el alumno debera elegir entre las franja horarias dadas",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        poll_id: 1,
        question: "De manera breve, ¿por que preferis ese horario?",
        description: "el alumno debera describir brevemente por que elgio tal franja horaria",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        poll_id: 1,
        question: "¿Cual es tu ocupacion?",
        description: "el alumno debera describir su ocupacion",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        poll_id: 2,
        question: "del 1 al 10,¿Que puntuacion le pondrias a la cursada de la materias en general?",
        description: "el alumno debera elegir una puntuacion",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        poll_id: 2,
        question: "¿Cual fue la materia mas interesante?",
        description: "el alumno debera elegir una materia de la cursada",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        poll_id: 2,
        question: "¿Cual fue la materia menos interesante?",
        description: "el alumno debera elegir una materia de la cursada",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Poll_questions', null, {});
  }
};