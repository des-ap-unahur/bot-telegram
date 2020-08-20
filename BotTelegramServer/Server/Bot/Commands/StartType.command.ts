import BotCommand from '../../Entities/Models/BotCommands.model';
import { toCommand } from '../Utils/ToCommand.utils';

export const StartType = {
  type: "Start",
  generateCommand: (command: BotCommand) => {
    const { tel_command, name, description } = command;
    return {
      command: toCommand(tel_command),
      message: name, 
      response: (ctx:any) => 
      {
        ctx.reply(
          description
        );
      }
    }
  }
}