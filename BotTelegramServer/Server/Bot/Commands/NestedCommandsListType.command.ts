import BotCommand from '../../Entities/Models/BotCommands.model';
import { toCommand } from '../Utils/ToCommand.utils';

export const NestedCommandsListType = {
  type: "NestedCommandsList",
  generateCommand: (command: BotCommand, externalParameter?:Array<string>) => {
    const { tel_command, name, description, parameter } = command;
    const list = parameter.split(',');

    const buildMessage = (list:Array<string>) => {
      const message = list.map(
        param => "/" + param + '\n'
      )
      const messageReplace = message.toString().replace(/,/g, '')
      return messageReplace
    }

    return {
      command: toCommand(tel_command),
      message: name, 
      response: (ctx:any) => 
      {
        ctx.reply(description);
        externalParameter ? 
          ctx.reply(buildMessage(externalParameter))
        :
          ctx.reply(buildMessage(list))        
      }
    }
  }
}