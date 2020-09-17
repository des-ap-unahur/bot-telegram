import BotCommand from '../../Entities/Models/BotCommands.model';
import { toCommand } from '../Utils/ToCommand.utils';

export const StartType = {
  type: "Start",
  generateCommand: (command: BotCommand) => {
    const { tel_command, name, botResponses } = command;
    const { response } = botResponses
    return {
      command: toCommand(tel_command),
      message: name, 
      response: (ctx:any) => 
      {
        ctx.reply(
          response
        );
      }
    }
  }
}