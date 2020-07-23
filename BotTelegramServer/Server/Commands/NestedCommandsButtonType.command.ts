import BotCommand from '../Models/BotCommands.model';
import Keyboard from '../Markups/Keyboard.markup';

export const NestedCommandsButtonType = {
  type: "NestedCommandsButtons",
  generateCommand: (command: BotCommand) => {
    const { tel_command, name, description, parameter } = command;
    const list = parameter.split(',');
    return {
      command: tel_command,
      message: name, 
      response: (ctx:any) => 
      {
        ctx.reply(description, Keyboard(list));
      }
    }
  }
}