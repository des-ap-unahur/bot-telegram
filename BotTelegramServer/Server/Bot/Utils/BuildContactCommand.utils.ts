import { ContactType } from '../Commands/ContactType.command';
import BotCommands from '../../Entities/Models/BotCommands.model';


export const buildContactCommand = (botCommands: BotCommands[]) => {
  const commandContact = botCommands.find(command => command.commandsTypes.type === "Contact")
  const buildContactCommand = commandContact ? ContactType.generateCommand(commandContact) : (ctx:any) => {}
  return buildContactCommand
}