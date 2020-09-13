export const assambleCommands = (commands: any[], typeCommands: any[], bot:any) => {
    return commands.map(command => 
      { 
        const type = typeCommands.find(typeCommand => typeCommand.type === command.commandsTypes.type);
        const hasExternalParameter = command.commandsTypes.type === "NestedCommandsList";
        const genericType = !type && typeCommands.find(typeCommands => typeCommands.type === 'Text');
        if(type){
          return !hasExternalParameter ?
            type.generateCommand(command)
          :
            type.generateCommand(
              command, 
              commands.map(
                commandName => commandName.tel_command
              )
            )
        }
        return genericType.generateCommand(command);
      } 
    )
  }