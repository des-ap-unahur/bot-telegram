import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

class BotResponseFilesSchema {
  @IsNotEmpty()
  @IsNumber()
  bot_response_id: number;
  @IsNotEmpty()
  @IsString()
  filename: string;
  @IsNotEmpty()
  @IsString()
  description: string;
  @IsNotEmpty()
  @IsString()
  url: string;
}

export default BotResponseFilesSchema;