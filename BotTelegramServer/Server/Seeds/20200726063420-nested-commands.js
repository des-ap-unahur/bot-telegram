'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('Bot_nested_commands', [{
                bot_father_id: 1,
                bot_child_id: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            }

        ]);

    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('Bot_nested_commands', null, {});

    }
};