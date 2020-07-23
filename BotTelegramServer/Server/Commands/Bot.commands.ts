import Telegraf from 'telegraf';
import { TelegrafContext } from 'telegraf/typings/context';
import { typeCommands } from './TypeCommands.commands'; 
import BotCommandRepository from '../Repositories/BotCommand.repository';
import BotCommand from '../Models/BotCommands.model';

export const buildCommands = async (bot: Telegraf<TelegrafContext>) => {
  const botCommands:BotCommand[] = await BotCommandRepository.getCommandsTypes();

  const commands = await botCommands.map(command => 
    { 
      const type = typeCommands.find(typeCommand => typeCommand.type === command.commandsTypes.type)
      const hasExternalParameter = command.commandsTypes.type === "NestedCommandsList";
      if(type){
        return !hasExternalParameter ?
          type.generateCommand(command)
        :
          type.generateCommand(
            command, 
            botCommands.map(
              commandName => commandName.tel_command
            )
          )
      }
    } 
  )
  
  bot.start(ctx => {});
  commands.map(command => bot.command(command.command, command.response))
  commands.map(command => bot.hears(command.message, command.response))
  bot.launch();
}



