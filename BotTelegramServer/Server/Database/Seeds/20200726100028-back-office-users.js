'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Backoffice_user', [{
        user_role_id: 1,
        first_name: "Rodolfo",
        last_name: "Uenard",
        email: "rodo@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_role_id: 1,
        first_name: "Lorena",
        last_name: "Fix",
        email: "fixture@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_role_id: 2,
        first_name: "Leonardo",
        last_name: "Cracken",
        email: "leo222@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_role_id: 2,
        first_name: "Carlos",
        last_name: "Quimono",
        email: "car@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_role_id: 3,
        first_name: "Matias",
        last_name: "Milan",
        email: "promaster9000@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_role_id: 3,
        first_name: "Lucas",
        last_name: "garofin",
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