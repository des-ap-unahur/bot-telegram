import { IsNotEmpty, IsNumber } from 'class-validator';

class BotNestedCommandsSchema {
  @IsNotEmpty()
  @IsNumber()
  bot_father_id: number;
  @IsNotEmpty()
  @IsNumber()
  bot_child_id: number;
}

export default BotNestedCommandsSchema;