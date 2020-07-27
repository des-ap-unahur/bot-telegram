import { configServer } from '../Server/Server.config';

const nodeMailerConfig = {
  NODEMAILER_HOST: configServer.get('NODEMAILER_HOST'),
  NODEMAILER_PORT: configServer.get('NODEMAILER_PORT'),
  USER: configServer.get('USER'),
  PASSWORD: configServer.get('PASSWORD'),
  CLIENT_ID: configServer.get('CLIENT_ID'),
  CLIENT_SECRET: configServer.get('CLIENT_SECRET'),
  REFRESH_TOKEN: configServer.get('REFRESH_TOKEN'),
  ACCESS_TOKEN: configServer.get('ACCESS_TOKEN'),
}

export default nodeMailerConfig