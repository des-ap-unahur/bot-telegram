'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bot_users', [{
        user_type_id: 1,
        tel_user_id: 20,
        tel_last_name: "Agus",
        tel_lfirst_name: "Remondas",
        tel_username: "crazyForDevelop",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_type_id: 3,
        tel_user_id: 21,
        tel_last_name: "Florencia",
        tel_lfirst_name: "Remir",
        tel_username: "crazyGirl",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_type_id: 3,
        tel_user_id: 22,
        tel_last_name: "Pedro",
        tel_lfirst_name: "Monda",
        tel_username: "user1111",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_type_id: 1,
        tel_user_id: 23,
        tel_last_name: "CristianS",
        tel_lfirst_name: "Saldivia",
        tel_username: "Ceda775",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_type_id: 2,
        tel_user_id: 24,
        tel_last_name: "Vadym",
        tel_lfirst_name: "Kultenko",
        tel_username: "DevelopProMigatex100",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_type_id: 2,
        tel_user_id: 25,
        tel_last_name: "Carlos",
        tel_lfirst_name: "Lobardi",
        tel_username: "TeacherPro999",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_type_id: 1,
        tel_user_id: 26,
        tel_last_name: "JonathanA",
        tel_lfirst_name: "silva",
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