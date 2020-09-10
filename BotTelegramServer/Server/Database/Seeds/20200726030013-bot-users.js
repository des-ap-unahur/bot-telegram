'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bot_users', [{
        user_type_id: 1,
        tel_user_id: 20,
        tel_first_name: "Agus",
        tel_last_name: "Remondas",
        tel_username: "crazyForDevelop",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_type_id: 3,
        tel_user_id: 21,
        tel_first_name: "Florencia",
        tel_last_name: "Remir",
        tel_username: "crazyGirl",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_type_id: 3,
        tel_user_id: 22,
        tel_first_name: "Pedro",
        tel_last_name: "Monda",
        tel_username: "user1111",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_type_id: 1,
        tel_user_id: 23,
        tel_first_name: "CristianS",
        tel_last_name: "Saldivia",
        tel_username: "Ceda775",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_type_id: 2,
        tel_user_id: 24,
        tel_first_name: "Vadym",
        tel_last_name: "Kultenko",
        tel_username: "DevelopProMigatex100",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_type_id: 2,
        tel_user_id: 25,
        tel_first_name: "Carlos",
        tel_last_name: "Lobardi",
        tel_username: "TeacherPro999",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_type_id: 1,
        tel_user_id: 26,
        tel_first_name: "JonathanA",
        tel_last_name: "silva",
        tel_username: "JonhyF",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bot_users', null, {});
  }
};