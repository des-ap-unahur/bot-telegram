'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Backoffice_user', [
        {
          user_role_id: 2,
          username: "fpuri",
          first_name: "Fernando",
          last_name: "Puri",
          email: "informatica@unahur.edu.at",
          password: "$2a$10$gwzZkHOF9uL5qbNf8ybcBeTUFf4yrGzWgtypsNX9QLjJBqOSC.gFW",
          createdAt: "2020-11-29T22:22:48.000Z",
          updatedAt: "2020-11-29T22:22:48.000Z"
        },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Backoffice_user', null, {});
  }
};