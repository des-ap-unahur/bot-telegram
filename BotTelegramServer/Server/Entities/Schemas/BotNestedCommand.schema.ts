import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

class BotNestedCommandsSchema {
  @IsNumber()
  @IsOptional()
  bot_nested_command_id: number;
  @IsNotEmpty()
  @IsNumber()
  bot_father_id: number;
  @IsNotEmpty()
  @IsNumber()
  bot_child_id: number;
}

export default BotNestedCommandsSchema;