'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Guarani_users', [{
        email: "user_1@gmail.com",
        profile: "student",
        phone_number: "1150256587",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "user_2@gmail.com",
        profile: "student",
        phone_number: "1150256857",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "user_3@gmail.com",
        profile: "teacher",
        phone_number: "1150256578",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "user_4@gmail.com",
        profile: "student and teacher",
        phone_number: "1150251234",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "user_5@gmail.com",
        profile: "student",
        phone_number: "1151234587",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "user_6@gmail.com",
        profile: "teacher",
        phone_number: "1150259658",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "user_7@gmail.com",
        profile: "student and teacher",
        phone_number: "1150252256",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Guarani_data', null, {});
  }
};