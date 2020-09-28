import { TelegrafContext } from 'telegraf/typings/context';
import BotCommand from '../../Entities/Models/BotCommands.model';
import { toCommand } from '../Utils/ToCommand.utils';

export const NestedCommandsListType = {
  type: "NestedCommandsList",
  generateCommand: (command: BotCommand) => {
    const { tel_command, name, botResponses, botNestedCommands } = command;
    const { response } = botResponses;
    const list = botNestedCommands.map(
      nestedCommand => nestedCommand.botCommand.tel_command
    );

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
      response: async (ctx:TelegrafContext) => 
      {
        await ctx.reply(response);
        await ctx.reply(buildMessage(list));  
      }
    }
  }
}