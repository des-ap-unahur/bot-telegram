'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Poll_responses', []);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Poll_responses', null, {});
  }
};