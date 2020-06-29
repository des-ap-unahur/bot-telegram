interface BotCommandsInterface{
    bot_command_id?: number | null;
    command_type_id?: number | null;
    user_type_id?: number | null;
    tel_command?: string | null;
    name: string | null;
    status: boolean | null;
    description: string | null;
    parameter: string | null;
}

export default BotCommandsInterface;