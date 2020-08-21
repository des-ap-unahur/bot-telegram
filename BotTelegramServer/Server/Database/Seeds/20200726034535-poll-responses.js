'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Poll_responses', [{
        user_id: 1,
        response_id: 1,
        response: "Lorem ipsum dolor sit amet consectetur adipiscing",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 1,
        response_id: 2,
        response: "Lorem ipsum dolor sit amet consectetur adipiscing",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 1,
        response_id: 3,
        response: "Lorem ipsum dolor sit amet consectetur adipiscing",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        response_id: 1,
        response: "Lorem ipsum dolor sit amet consectetur adipiscing",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        response_id: 2,
        response: "Lorem ipsum dolor sit amet consectetur adipiscing",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        response_id: 3,
        response: "Lorem ipsum dolor sit amet consectetur adipiscing",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Poll_responses', null, {});
  }
};