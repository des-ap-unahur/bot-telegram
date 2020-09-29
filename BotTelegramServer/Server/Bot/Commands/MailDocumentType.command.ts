import { MailTransporter } from '../../Entities/Services/NodeMailer.service';
import { configServer } from '../../Config/Server/Server.config';
import { toCommand } from '../Utils/ToCommand.utils';
import BotCommand from '../../Entities/Models/BotCommands.model';
import BotUsers from '../../Entities/Models/BotUsers.model';
import BotUserRepository from '../../Entities/Repositories/BotUser.repository';
import { TelegrafContext } from 'telegraf/typings/context';

export const MailDocumentType = {  
  type: "MailDocument",
  generateCommand: (command: BotCommand) => {
    const { tel_command, name, botResponses } = command;
    const { response, botResponseFiles } = botResponses;
    const { url, filename } = botResponseFiles

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
            text: response,
            attachments: [{ filename: filename + '.pdf', path: url, contentType: 'application/pdf' }]
          })
        }
      }
    }
  } 
}