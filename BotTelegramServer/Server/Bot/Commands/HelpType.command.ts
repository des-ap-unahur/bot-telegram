import BotCommand from '../../Entities/Models/BotCommands.model';
import { toCommand } from '../Utils/ToCommand.utils';

export const HelpType = {
  type: "Help",
  generateCommand: (command: BotCommand, externalParameter?:Array<string>) => {
    const { tel_command, name, botResponses } = command;
    const { response } = botResponses;

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
      response: async (ctx:any) => 
      {
        await ctx.reply(response); 
        await ctx.reply(buildMessage(externalParameter))
      }
    }
  }
}