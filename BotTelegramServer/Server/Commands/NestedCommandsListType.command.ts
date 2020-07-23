import BotCommand from '../Models/BotCommands.model';

export const NestedCommandsListType = {
  type: "NestedCommandsList",
  generateCommand: (command: BotCommand, externalParameter?:Array<string>) => {
    const { tel_command, name, description, parameter } = command;
    const list = parameter.split(',');
    return {
      command: tel_command,
      message: name, 
      response: (ctx:any) => 
      {
        ctx.reply(description);
        externalParameter ? 
          externalParameter.map(
            params => 
              ctx.reply("/" + params)
          ) 
        :
          list.map(
            params => 
              ctx.reply("/" + params)
          ) 
        
      }
    }
  }
}