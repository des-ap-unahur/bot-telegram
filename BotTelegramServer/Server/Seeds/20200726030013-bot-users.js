'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {


        return queryInterface.bulkInsert('Bot_users', [{
                user_type_id: 1,
                tel_user_id: 20,
                tel_lname: "Agus",
                tel_lfname: "Remondas",
                tel_username: "crazyForDevelop",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                user_type_id: 3,
                tel_user_id: 21,
                tel_lname: "Florencia",
                tel_lfname: "Remir",
                tel_username: "crazyGirl",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                user_type_id: 3,
                tel_user_id: 22,
                tel_lname: "Pedro",
                tel_lfname: "Monda",
                tel_username: "user1111",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                user_type_id: 1,
                tel_user_id: 23,
                tel_lname: "CristianS",
                tel_lfname: "Saldivia",
                tel_username: "Ceda775",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                user_type_id: 2,
                tel_user_id: 24,
                tel_lname: "Vadym",
                tel_lfname: "Kultenko",
                tel_username: "DevelopProMigatex100",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                user_type_id: 2,
                tel_user_id: 25,
                tel_lname: "Carlos",
                tel_lfname: "Lobardi",
                tel_username: "TeacherPro999",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                user_type_id: 1,
                tel_user_id: 26,
                tel_lname: "JonathanA",
                tel_lfname: "silva",
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