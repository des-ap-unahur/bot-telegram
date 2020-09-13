import BotCommand from '../../Entities/Models/BotCommands.model';
import { toCommand } from '../Utils/ToCommand.utils';
import PollRepository from '../../Entities/Repositories/Poll.repository';
export const PollType ={
    type: "Poll",
    generateCommand: (command: BotCommand) => {
        const { tel_command, name } = command;
        return {
          command: toCommand(tel_command),
          message: name, 
          response: (ctx:any,polls:any) => 
          {
           ctx.reply(polls)
          }
        }
      }
    }

