'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Backoffice_user', [{
        user_role_id: 1,
        first_name: "Rodolfo",
        last_name: "Uenard",
        username:"rodo1",
        email: "rodo@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_role_id: 1,
        first_name: "Lorena",
        username:"lore1",
        last_name: "Fix",
        email: "fixture@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_role_id: 2,
        first_name: "Leonardo",
        username:"leo1",
        last_name: "Cracken",
        email: "leo222@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_role_id: 2,
        first_name: "Carlos",
        username:"carlos1",
        last_name: "Quimono",
        email: "car@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_role_id: 3,
        first_name: "Matias",
        username:"mati1",
        last_name: "Milan",
        email: "promaster9000@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_role_id: 3,
        first_name: "Lucas",
        username:"lucas1",
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