import { TelegrafContext } from 'telegraf/typings/context';
import BotCommand from '../../Entities/Models/BotCommands.model';
import Keyboard from '../Markups/Keyboard.markup';
import { toCommand } from '../Utils/ToCommand.utils';

export const NestedCommandsButtonType = {
  type: "NestedCommandsButton",
  generateCommand: (command: BotCommand) => {
    const { tel_command, name, botResponses, botNestedCommands } = command;
    const { response } = botResponses;
    const buttons: string[] = botNestedCommands.map(
      nestedCommand => nestedCommand.botCommand.name
    );
    const buttonsLimited: string[] = buttons.slice(0, 8);

    return {
      command: toCommand(tel_command),
      message: name, 
      response: (ctx:TelegrafContext) => 
      {
        ctx.reply(response, Keyboard(buttonsLimited));
      }
    }
  }
}