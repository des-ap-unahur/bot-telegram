import { Extra } from 'telegraf';
import BotCommand from '../Models/BotCommands.model';

export const RegistrationType = {
  type: "Registration",
  generateCommand: (command: BotCommand) => {
    const { tel_command, name, description, parameter } = command;
    return {
      command: tel_command,
      message: name, 
      response: (ctx:any) => 
      {
        ctx.reply(description,
          Extra
            .markdown()
            .markup(
              (markup) =>
                markup.keyboard([
                  [markup.contactRequestButton(parameter)]
                ])
                .oneTime()
                .resize()
            )
        );
      }
    }
  }
}