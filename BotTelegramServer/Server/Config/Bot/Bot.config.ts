import { configServer } from '../Server/Server.config';

const botConfig = {
  botToken: configServer.get('BOT_TOKEN')
}

export default botConfig;