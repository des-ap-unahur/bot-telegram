import BotCommand from "../Models/Poll.model";

class BotCommandRepository {
  getBotCommands = async (): Promise<BotCommand[]> => {
    const botCommands: BotCommand[] = await BotCommand.findAll();
    return botCommands;
  };
}

export default new BotCommandRepository();
