import BotCommand from '../Models/BotCommands.model';

export const StartType = {
  type: "Start",
  generateCommand: (command: BotCommand) => {
    const { tel_command, name, description } = command;
    return {
      command: tel_command,
      message: name, 
      response: (ctx:any) => 
      {
        ctx.reply(
          description
        );
      }
    }
  }
}