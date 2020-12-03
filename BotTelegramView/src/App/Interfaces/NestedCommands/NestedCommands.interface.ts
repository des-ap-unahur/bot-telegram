import BotCommands from "../Commands/BotComands.interface";

interface NestedCommandsInterface {
  bot_nested_command_id?: number;
  bot_child_id: number;
  bot_father_id: number;
  botCommand?: BotCommands[];
  createdAt?: string;
  updatedAt?: string;
}

export default NestedCommandsInterface;