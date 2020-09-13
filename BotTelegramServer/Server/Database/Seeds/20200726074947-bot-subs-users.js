'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bot_susc_users', [{
        user_id: 1,
        dni: 38568547,
        first_name: "Agus",
        last_name: "Remonda",
        date_suscribe: new Date(),
        verified: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 4,
        dni: 15487526,
        first_name: "CristianS",
        last_name: "Saldivia",
        date_suscribe: new Date(),
        verified: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 5,
        dni: 15485526,
        first_name: "Vadym",
        last_name: "Kultenko",
        date_suscribe: new Date(),
        verified: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 6,
        dni: 88487526,
        first_name: "Carlos",
        last_name: "Lombardi",
        date_suscribe: new Date(),
        verified: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 7,
        dni: 15437526,
        first_name: "JonathanA",
        last_name: "silva",
        date_suscribe: new Date(),
        verified: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bot_susc_users', null, {});
  }
};