import BotCommand from '../Models/BotCommands.model';
import { toCommand } from '../Utils/ToCommand.utils';

export const DocumentType = {
  type: "Document",
  generateCommand: (command: BotCommand) => {
    const { tel_command, name, parameter } = command;
    return {
      command: toCommand(tel_command),
      message: name, 
      response: (ctx:any) => 
      {
        ctx.replyWithDocument(
          parameter
        );
      }
    }
  }
}