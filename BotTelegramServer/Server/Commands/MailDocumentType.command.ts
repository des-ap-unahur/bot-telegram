import { MailTransporter } from '../Services/NodeMailer.service';
import { configServer } from '../Config/Server/Server.config';
import { toCommand } from '../Utils/ToCommand.utils';
import BotCommand from '../Models/BotCommands.model';

export const MailDocumentType = {  
  type: "MailDocument",
  generateCommand: (command: BotCommand) => {
    const { tel_command, name, description, parameter } = command;
    return {
      command: toCommand(tel_command),
      message: name, 
      response: (ctx:any, mail?:boolean) => 
      {
        !mail && ctx.reply(description)

        mail && 
          MailTransporter.sendMail({
            from: configServer.get('NODEMAILER_FROM'),
            to: ctx.message.text,
            subject: name,
            text: name,
            attachments: [{ filename: name + '.pdf', path: parameter, contentType: 'application/pdf' }]
          })
      }
    }
  } 
}