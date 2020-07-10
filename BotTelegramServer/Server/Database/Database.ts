import { Sequelize } from 'sequelize-typescript';
import databaseConfig from '../Config/Database/Database.config';
import { ModelList } from "../Config/Database/Models.config";

const sequelize = new Sequelize(
  databaseConfig.DB_NAME, 
  databaseConfig.DB_USERNAME, 
  databaseConfig.DB_PASSWORD, 
  {
    host: databaseConfig.HOST,
    dialect: 'mysql',
    models: ['../Models'],
    pool: {
      max: databaseConfig.POOL_MAX,
      min: databaseConfig.POOL_MIN,
      idle: databaseConfig.POOL_IDLE,
    },
    logging: databaseConfig.LOGGING === 'true',
  },
);

sequelize.addModels(ModelList)

export default sequelize;