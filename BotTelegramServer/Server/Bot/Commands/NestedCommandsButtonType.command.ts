import BotCommand from '../../Entities/Models/BotCommands.model';
import Keyboard from '../Markups/Keyboard.markup';
import { toCommand } from '../Utils/ToCommand.utils';

export const NestedCommandsButtonType = {
  type: "NestedCommandsButtons",
  generateCommand: (command: BotCommand) => {
    //Lo cambie para que no rompa todo.
    const { tel_command, name, botResponses} = command;
    const { response, parameter } = botResponses;
    const list = parameter.split(',');
    return {
      command: toCommand(tel_command),
      message: name, 
      response: (ctx:any) => 
      {
        ctx.reply(response, Keyboard(list));
      }
    }
  }
}