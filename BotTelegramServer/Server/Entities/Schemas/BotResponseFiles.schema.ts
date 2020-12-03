import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

class BotResponseFilesSchema {
  @IsOptional()
  @IsNumber()
  bot_response_id: number;
  @IsNotEmpty()
  @IsString()
  filename: string;
  @IsString()
  description: string;
  @IsNotEmpty()
  @IsString()
  url: string;
}

export default BotResponseFilesSchema;