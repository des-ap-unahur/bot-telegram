import BotCommand from '../../Entities/Models/BotCommands.model';
import { TelegrafContext } from 'telegraf/typings/context';
import { registrationUser } from '../Utils/RegistrationUser.utils';
import BotUsers from '../../Entities/Models/BotUsers.model';

export const ContactType = {
  type: "Contact",
  generateCommand: (command: BotCommand) => {
    const { description } = command;
    return async (ctx: TelegrafContext, fetchUser: (ctx) => void) => 
      {
        const botUser = await registrationUser(ctx);
        await fetchUser(ctx);
        
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