import BotCommand from '../../Entities/Models/BotCommands.model';
import GuaraniUsersRepository from '../../Entities/Repositories/GuaraniUsers.repository';
import BotUserRepository from '../../Entities/Repositories/BotUser.repository';
import { TelegrafContext } from 'telegraf/typings/context';
import GuaraniUsersInterface from '../../Interfaces/GuaraniUsers.interface';
import BotUsersInterface from '../../Interfaces/BotUsers.interface';
import { botUserTypes } from '../Constants/Bot.constans';
import { registrationUser } from '../Utils/RegistrationUser.utils';

export const ContactType = {
  type: "Contact",
  generateCommand: (command: BotCommand) => {
    const { description } = command;
    return async (ctx: TelegrafContext) => 
      {
        const botUser = await registrationUser(ctx);
        
        const botParams = {
          ':name': botUser.tel_first_name,
          ':lastname': botUser.tel_last_name,
          ':phone_number': botUser.phoneNumber,
          ':user_type': botUser.profile
        }

        const buildMessage = () => {
          let message = description;
          const params = Object.keys(botParams);

          params.forEach(param => message = message.replace(param, botParams[param]));

          return message;
        }

        ctx.reply(buildMessage());
      }
  }
}