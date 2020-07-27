export const assambleCommands = (commands: any[], typeCommands: any[]) => {
  return commands.map(command => 
    { 
      const type = typeCommands.find(typeCommand => typeCommand.type === command.commandsTypes.type)
      const hasExternalParameter = command.commandsTypes.type === "NestedCommandsList";

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
    } 
  )
}