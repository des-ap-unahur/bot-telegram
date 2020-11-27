import { IsNotEmpty, IsNumber, IsString } from 'class-validator';


class BotResponseSchema {
  bot_response_id: number;
  @IsNotEmpty()
  @IsNumber()
  bot_id: number;
  @IsString()
  response: string;
  @IsNotEmpty()
  @IsString()
  description: string;
  @IsString()
  parameter: string; 
}

export default BotResponseSchema;