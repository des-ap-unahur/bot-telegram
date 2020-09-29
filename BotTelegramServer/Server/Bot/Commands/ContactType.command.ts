import BotCommand from '../../Entities/Models/BotCommands.model';
import { TelegrafContext } from 'telegraf/typings/context';
import { registrationUser } from '../Utils/RegistrationUser.utils';


export const ContactType = {
  type: "Contact",
  generateCommand: (command: BotCommand) => {
    const { botResponses } = command;
    const { response } = botResponses;
    
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
          let message = response;
          const params = Object.keys(botParams);

          params.forEach(param => message = message.replace(param, botParams[param]));

          return message;
        }

        ctx.reply(buildMessage());
      }
  }
}