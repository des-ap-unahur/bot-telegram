'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('Polls_roles_access', [{
                role_id: 2,
                poll_id: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                role_id: 2,
                poll_id: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },

        ]);

    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('Polls_roles_access', null, {});

    }
};