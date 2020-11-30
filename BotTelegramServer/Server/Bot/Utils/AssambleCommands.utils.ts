import BotCommands from "../../Entities/Models/BotCommands.model";

export const assambleCommands = (commands: BotCommands[], typeCommands: any[]) => {

return  commands.map(command => 
  { 
    const type = typeCommands.find(typeCommand => typeCommand.type === command.commandsTypes.type);
    const hasExternalParameter = command.commandsTypes.type === "Help";
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
)}
  