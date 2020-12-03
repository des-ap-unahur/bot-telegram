interface BotCommandsInterface {
  bot_command_id?: number;
  command_type_id: number;
  user_type_id: number;
  tel_command: string;
  description: string;
  name: string;
  status: boolean;
}

export default BotCommandsInterface;