import { MailTransporter } from '../../Entities/Services/NodeMailer.service';
import { configServer } from '../../Config/Server/Server.config';
import { toCommand } from '../Utils/ToCommand.utils';
import BotCommand from '../../Entities/Models/BotCommands.model';
import BotUserRepository from '../../Entities/Repositories/BotUser.repository';
import { TelegrafContext } from 'telegraf/typings/context';
import BotUsers from '../../Entities/Models/BotUsers.model';
import { botWording } from '../Constants/Wording/Bot.wording';

export const MailTextType = {  
  type: "MailText",
  generateCommand: (command: BotCommand) => {
    const { tel_command, name, botResponses } = command;
    const { response } = botResponses;
    
    return {
      command: toCommand(tel_command),
      message: name, 
      response: async (ctx:TelegrafContext) => 
      {
        const telegram_user_id: number = ctx.message.chat.id;
        const user: BotUsers | null = await BotUserRepository.getByTelegramIdWithGuaraniUser(telegram_user_id);

        if(user){
          MailTransporter.sendMail({
            from: configServer.get('NODEMAILER_FROM'),
            to: user.guaraniUser.email,
            subject: name,
            text: response
          })
          ctx.reply(botWording.theMailHasBeenDeliveredSuccessfully)
        }
      }
    }
  } 
}