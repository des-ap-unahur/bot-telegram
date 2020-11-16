import BotCommands from "./BotComands.interface";

export interface NestedCommandsInterface {
  botCommand?: BotCommands;
  bot_child_id: number;
  bot_father_id: number;
  bot_nested_command_id?: number;
  createdAt?: string;
  updatedAt?: string;
}