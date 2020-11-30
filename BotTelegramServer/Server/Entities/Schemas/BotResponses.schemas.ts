import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';


class BotResponseSchema {
  @IsNumber()
  @IsOptional()
  bot_response_id: number;
  @IsNotEmpty()
  @IsNumber()
  bot_id: number;
  @IsString()
  @IsNotEmpty()
  response: string;
  @IsNotEmpty()
  @IsString()
  description: string;
  @IsString()
  @IsOptional()
  parameter: string; 
}

export default BotResponseSchema;