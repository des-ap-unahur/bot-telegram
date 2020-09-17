import { MailTransporter } from '../../Entities/Services/NodeMailer.service';
import { configServer } from '../../Config/Server/Server.config';
import { toCommand } from '../Utils/ToCommand.utils';
import BotCommand from '../../Entities/Models/BotCommands.model';

export const MailTextType = {  
  type: "MailText",
  generateCommand: (command: BotCommand) => {
    const { tel_command, name, botResponses } = command;
    const { response, parameter } = botResponses
    return {
      command: toCommand(tel_command),
      message: name, 
      response: (ctx:any, mail?:boolean) => 
      {
        !mail && ctx.reply(response)

        mail && 
          MailTransporter.sendMail({
            from: configServer.get('NODEMAILER_FROM'),
            to: ctx.message.text,
            subject: parameter,
            text: parameter
          })
      }
    }
  } 
}