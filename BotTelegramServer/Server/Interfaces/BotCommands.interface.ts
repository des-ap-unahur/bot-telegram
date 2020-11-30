interface BotCommandsInterface {
  bot_command_id?: number | null;
  command_type_id?: number | null;
  user_type_id: number;
  tel_command?: string | null;
  description?: string | null;
  name: string | null;
  status: boolean | null;
}

export default BotCommandsInterface;