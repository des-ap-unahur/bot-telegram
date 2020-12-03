import CommandTypeInterface from "../CommandTypes/CommandTypes.interface";
import NestedCommandsInterface from "../NestedCommands/NestedCommands.interface";
import ResponseInterface from "../Responses/Response.interface";
import UserTypes from "../UserTypes/UserTypes.interface";

interface BotCommands {
  bot_command_id?: number | null;
  command_type_id: number;
  user_type_id: number;
  tel_command: string;
  description: string;
  name: string;
  status: boolean | null;
  user_type: UserTypes;
  botResponses: ResponseInterface;
  commandType: CommandTypeInterface;
  botNestedCommands: NestedCommandsInterface[];
  createdAt?: string;
  updatedAt?: string;
}

export default BotCommands;