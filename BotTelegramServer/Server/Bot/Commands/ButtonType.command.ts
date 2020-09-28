import { TelegrafContext } from 'telegraf/typings/context';
import BotCommand from '../../Entities/Models/BotCommands.model';
import Keyboard from '../Markups/Keyboard.markup';
import { toCommand } from '../Utils/ToCommand.utils';

export const ButtonType = {
  type: "Button",
  generateCommand: (command: BotCommand) => {
    const { tel_command, name,botResponses } = command;
    const { response, parameter } = botResponses;
    const list = parameter.split(',');

    return {
      command: toCommand(tel_command),
      message: name, 
      response: (ctx:TelegrafContext) => 
      {
        ctx.reply(response, Keyboard(list));
      }
    }
  }
}