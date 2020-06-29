import { configServer } from '../Server/Server.config';

const databaseConfig = {
  DB_NAME: configServer.get('DB_NAME'),
  DB_USERNAME: configServer.get('DB_USERNAME'),
  DB_PASSWORD: configServer.get('DB_PASSWORD'),
  HOST: configServer.get('DB_HOST'),
  POOL_MAX: 1,
  POOL_MIN: 0,
  POOL_IDLE: 10000,
  LOGGING: 'false',
}

export default databaseConfig