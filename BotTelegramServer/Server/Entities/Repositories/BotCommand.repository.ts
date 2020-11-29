import BotCommand from "../Models/BotCommands.model";
import BotCommandInterface from "../../Interfaces/BotCommands.interface";
import CommandTypes from "../Models/CommandsTypes.model";
import BotResponses from "../Models/BotResponses.model";
import BotResponseFiles from "../Models/BotResponseFiles.model";
import BotNestedCommands from "../Models/BotNestedCommands.model";
import UserTypes from "../Models/UserTypes.model";
import paginate from "../../Utils/Paginate.utils";
import { compareLogin } from "../../Utils/Auth.utils";

class BotCommandRepository {
  getAll = async (): Promise<BotCommand[]> => {
    const commands: BotCommand[] = await BotCommand.findAll({
      include: [
        CommandTypes,
        UserTypes,
        BotNestedCommands,
        { model: BotResponses, include: [BotResponseFiles] },
      ],
    });
    return commands;
  };

  getCommandWithAllRelationsFilteredByStatus = async (): Promise<
    BotCommand[]
  > => {
    const commands: BotCommand[] = await BotCommand.findAll({
      include: [
        CommandTypes,
        UserTypes,
        { model: BotNestedCommands, include: [BotCommand] },
        { model: BotResponses, include: [BotResponseFiles] },
      ],
      where: { status: true },
    });

    return commands;
  };

  getCommandWithAllRelation = async (): Promise<BotCommand[]> => {
    const commands: BotCommand[] = await BotCommand.findAll({
      include: [
        CommandTypes,
        UserTypes,
        { model: BotNestedCommands, include: [BotCommand] },
        { model: BotResponses, include: [BotResponseFiles] },
      ],
    });
    return commands;
  };

  getCommandWithAllRelationPagination = async (
    paginationData: any
  ): Promise<any> => {
    const total: number = await BotCommand.count();
    const botCommands: BotCommand[] = await BotCommand.findAll({
      include: [
        CommandTypes,
        UserTypes,
        { model: BotNestedCommands, include: [BotCommand] },
        { model: BotResponses, include: [BotResponseFiles] },
      ],
      ...paginate(paginationData),
    });

    return { total, botCommands };
  };

  getCommandsTypes = async (): Promise<BotCommand[]> => {
    const commands: BotCommand[] = await BotCommand.findAll({
      include: [CommandTypes],
    });
    return commands;
  };

  getCommandsTypesById = async (id: number): Promise<BotCommand> => {
    const commands: BotCommand = await BotCommand.findByPk(id, {
      include: [CommandTypes],
    });
    return commands;
  };

  get = async (id: number): Promise<BotCommand> => {
    const command: BotCommand = await BotCommand.findByPk(id);
    return command;
  };

  post = async (data: BotCommandInterface): Promise<BotCommand> => {
    const command: BotCommand = await BotCommand.create(data);
    return command;
  };

  update = async (
    id: number,
    data: BotCommandInterface
  ): Promise<BotCommand> => {
    const command: BotCommand = await BotCommand.findByPk(id);
    command.update(data);
    return command;
  };

  delete = async (id: number): Promise<any> => {
    try {
      const command: BotCommand = await BotCommand.findByPk(id, {
        include: [BotResponses],
      });
      if (!command) return { message: "el comando no existe" };
      const botResponses =
        command.botResponses &&
        (await BotResponses.findByPk(command.botResponses.bot_response_id, {
          include: [BotResponseFiles],
        }));
      const botResponsesFiles =
        botResponses && botResponses.botResponseFiles &&
        (await BotResponseFiles.findByPk(
          botResponses.botResponseFiles.bot_respose_files_id
        ));
       const botNestedCommandsBotFather = await BotNestedCommands.findAll({
        where: {
          bot_father_id: id,
        },
      });
      const botNestedCommandsBotChild = await BotNestedCommands.findAll({
        where: {
          bot_child_id: id,
        },
      });
      botNestedCommandsBotChild && await Promise.all(botNestedCommandsBotChild.map(e=>e.destroy()));
      botNestedCommandsBotFather && await Promise.all(botNestedCommandsBotFather.map(e=>e.destroy()));
      botResponsesFiles && await botResponsesFiles.destroy();
      botResponses &&  await botResponses.destroy();
      command && await command.destroy();
      return { message: "ok" };
    } catch (e) {
      console.log(e);
    }
  };
}

export default new BotCommandRepository();
