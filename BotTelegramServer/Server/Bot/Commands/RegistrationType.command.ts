import BotCommand from '../../Entities/Models/BotCommands.model';
import ContactButton from '../Markups/ContactButton.markup';
import { toCommand } from '../Utils/ToCommand.utils';

export const RegistrationType = {
  type: "Registration",
  generateCommand: (command: BotCommand) => {
    const { tel_command, name, botResponses} = command;
    const { response, parameter } = botResponses;
    return {
      command: toCommand(tel_command),
      message: name, 
      response: (ctx:any) => 
      {
        ctx.reply(response, ContactButton(parameter));
      }
    }
  }
}