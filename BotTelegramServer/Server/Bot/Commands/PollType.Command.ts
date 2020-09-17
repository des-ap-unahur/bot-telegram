import BotCommand from '../../Entities/Models/BotCommands.model';
import { toCommand } from '../Utils/ToCommand.utils';
import { TelegrafContext } from 'telegraf/typings/context';

export const PollType = {
  type: "Poll",
  generateCommand: (command: BotCommand) => {
    const { tel_command, name } = command;
    return {
      command: toCommand(tel_command),
      message: name, 
      response: (ctx: TelegrafContext, polls:any) => 
      {
        ctx.reply(polls)
      }
    }
  }
}

