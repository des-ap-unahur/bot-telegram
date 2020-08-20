const dotenv = require('dotenv').config({ path: `Environments/${process.env.NODE_ENV}.env` });

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    modelPaths: [
      __dirname + '/../Entities/Models/*.ts'
    ]
  },
};
