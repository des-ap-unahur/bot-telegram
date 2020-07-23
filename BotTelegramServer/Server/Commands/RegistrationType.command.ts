import BotCommand from '../Models/BotCommands.model';
import ContactButton from '../Markups/ContactButton.markup';

export const RegistrationType = {
  type: "Registration",
  generateCommand: (command: BotCommand) => {
    const { tel_command, name, description, parameter } = command;
    return {
      command: tel_command,
      message: name, 
      response: (ctx:any) => 
      {
        ctx.reply(description, ContactButton(parameter));
      }
    }
  }
}