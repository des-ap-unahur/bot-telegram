import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';


class BotResponseSchema {
  @IsOptional()
  @IsNumber()
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
  @IsOptional()
  @IsString()
  parameter: string; 
}

export default BotResponseSchema;