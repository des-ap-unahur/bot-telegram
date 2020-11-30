import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

class BotResponseFilesSchema {
  @IsNumber()
  @IsOptional()
  bot_response_id: number;
  @IsNotEmpty()
  @IsString()
  filename: string;
  @IsString()
  @IsOptional()
  description: string;
  @IsNotEmpty()
  @IsString()
  url: string;
}

export default BotResponseFilesSchema;