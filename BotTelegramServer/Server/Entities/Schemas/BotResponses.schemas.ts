import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

class BotResponseSchema {
  bot_response_id: number;
  @IsNotEmpty()
  @IsNumber()
  bot_id: number;
  @IsNotEmpty()
  @IsString()
  response: string;
  @IsNotEmpty()
  @IsString()
  description: string;
}

export default BotResponseSchema;