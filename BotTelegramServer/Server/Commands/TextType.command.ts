import BotCommand from '../Models/BotCommands.model';
import { toCommand } from '../Utils/ToCommand.utils';

export const TextType = {
  type: "Text",
  generateCommand: (command: BotCommand) => {
    const { tel_command, name, description } = command;
    return {
      command: toCommand(tel_command),
      message: name, 
      response: (ctx:any) => 
      {
        ctx.reply(description);
      }
    }
  }
}