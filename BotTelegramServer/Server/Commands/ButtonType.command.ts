import { Extra } from 'telegraf';
import BotCommand from '../Models/BotCommands.model';

export const ButtonType = {
  type: "Button",
  generateCommand: (command: BotCommand) => {
    const { tel_command, name, description, parameter } = command;
    const list = parameter.split(',');
    return {
      command: tel_command,
      message: name, 
      response: (ctx:any) => 
      {
        console.log(ctx)
        ctx.reply(description,
          Extra.markup((markup) => {
            return markup.keyboard([
              [...list]
            ])
            .oneTime()
            .resize()
            .extra()
          })
        );
      }
    }
  }
}