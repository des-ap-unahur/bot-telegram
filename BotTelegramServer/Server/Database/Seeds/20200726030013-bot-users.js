'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bot_users', [
      {
        user_type_id: 1,
        guarani_user_id: 1,
        tel_user_id: 1300719809,
        tel_first_name: "Agustin",
        tel_last_name: "Remonda",
        tel_username: "Agustin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_type_id: 1,
        guarani_user_id: 2,
        tel_user_id: 927609566,
        tel_first_name: "Jonathan",
        tel_last_name: "fds",
        tel_username: "Jonathan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_type_id: 2,
        guarani_user_id: 3,
        tel_user_id: 953378480,
        tel_first_name: "Cristian",
        tel_last_name: "Saldivia",
        tel_username: "Cristian",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_type_id: 1,
        guarani_user_id: 4,
        tel_user_id: 449836376,
        tel_last_name: "UNAHUR",
        tel_first_name: "Informática",
        tel_username: "Informática",
        createdAt: "2020-11-27T22:21:11.000Z",
        updatedAt: "2020-11-27T22:21:11.000Z",
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bot_users', null, {});
  }
};