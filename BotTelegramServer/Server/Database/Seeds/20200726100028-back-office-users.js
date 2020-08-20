'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Backoffice_user', [{
        user_role_id: 1,
        fname: "Rodolfo",
        lname: "Uenard",
        email: "rodo@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_role_id: 1,
        fname: "Lorena",
        lname: "Fix",
        email: "fixture@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_role_id: 2,
        fname: "Leonardo",
        lname: "Cracken",
        email: "leo222@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_role_id: 2,
        fname: "Carlos",
        lname: "Quimono",
        email: "car@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_role_id: 3,
        fname: "Matias",
        lname: "Milan",
        email: "promaster9000@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_role_id: 3,
        fname: "Lucas",
        lname: "garofin",
        email: "2mil5@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Backoffice_user', null, {});
  }
};