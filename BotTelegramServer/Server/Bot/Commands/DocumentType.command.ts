import { TelegrafContext } from 'telegraf/typings/context';
import BotCommand from '../../Entities/Models/BotCommands.model';
import { toCommand } from '../Utils/ToCommand.utils';

export const DocumentType = {
  type: "Document",
  generateCommand: (command: BotCommand) => {
    const { tel_command, name, botResponses} = command;
    const { botResponseFiles } = botResponses;
    const { url } = botResponseFiles;
 
    return {
      command: toCommand(tel_command),
      message: name, 
      response: (ctx:TelegrafContext) => 
      {
        ctx.replyWithDocument(
          url
        );
      }
    }
  }
}