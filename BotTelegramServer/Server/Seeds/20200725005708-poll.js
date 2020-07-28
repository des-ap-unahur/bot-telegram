'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('Poll', [{
                name: "Definir horario de cursada",
                description: "Los alumnos podran elegir un conjunto de horarios en caso que el profesor lo requiera(salir un poco antes y entrar mas temprano o lo contrario) ",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Opinion de cursada",
                description: "Los alumnos podran opinar de manera NO ANONIMA sobre la cursada y dar sugerencias ",
                createdAt: new Date(),
                updatedAt: new Date(),
            },

        ]);
    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('Poll', null, {});

    }
};