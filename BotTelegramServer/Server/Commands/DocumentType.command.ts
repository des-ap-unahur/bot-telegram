import BotCommand from '../Models/BotCommands.model';

export const DocumentType = {
  type: "Document",
  generateCommand: (command: BotCommand) => {
    const { tel_command, name, parameter } = command;
    return {
      command: tel_command,
      message: name, 
      response: (ctx:any) => 
      {
        ctx.replyWithDocument(
          parameter
        );
      }
    }
  }
}