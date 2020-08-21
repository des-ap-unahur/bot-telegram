import { ContactType } from '../Commands/ContactType.command';

export const buildContactCommand = (botCommands) => {
  const commandContact = botCommands.find(command => command.commandsTypes.type === "Contact")
  const buildContactCommand = commandContact ? ContactType.generateCommand(commandContact) : (ctx:any) => {}
  return buildContactCommand
}