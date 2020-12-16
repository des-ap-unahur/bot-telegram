'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bot_susc_users', []);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bot_susc_users', null, {});
  }
};