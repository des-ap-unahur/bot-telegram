import UserTypes from "./UserTypes.interface";

interface CommandTypesInterface{
  command_types_id?: number | null;
  type?: string | null;
  description?: string | null;
}

interface BotNestedCommands {
  bot_father_id?: number | null;
  bot_child_id?: number | null;
  botCommand: BotCommands;
}


interface BotResponseFiles{
  bot_respose_files_id?: number | null;
  bot_response_id?: number | null;
  filename?: string | null;
  description?: string | null;
  url?: string | null;
}

interface BotResponses {
  bot_response_id?: number | null;
  bot_id?: number | null;
  response?: string | null;
  description?: string | null;
  parameter?: string | null;
  botResponseFiles?: BotResponseFiles;
}

interface BotCommands {
  bot_command_id?: number | null;
  command_type_id: number;
  user_type_id: number;
  tel_command: string;
  description: string;
  name: string;
  status: boolean | null;
  user_type: UserTypes;
  botResponses: BotResponses;
  commandType: CommandTypesInterface;
  botNestedCommands: BotNestedCommands[];
  createdAt?: string;
  updatedAt?: string;
}

export default BotCommands;