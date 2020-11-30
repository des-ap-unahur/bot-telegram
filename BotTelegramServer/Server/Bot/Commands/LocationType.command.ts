import BotCommand from '../../Entities/Models/BotCommands.model';
import { toCommand } from '../Utils/ToCommand.utils';

export const LocationType = {
  type: "Location",
  generateCommand: (command: BotCommand) => {
    const { tel_command, name, botResponses } = command;
    const { parameter } = botResponses;
    const coordinates: string[] = parameter ? parameter.split(',') : [];
    
    return {
      command: toCommand(tel_command),
      message: name, 
      response: (ctx:any) => 
      {
        ctx.replyWithLocation(
          ...coordinates
        );
      }
    }
  }
}