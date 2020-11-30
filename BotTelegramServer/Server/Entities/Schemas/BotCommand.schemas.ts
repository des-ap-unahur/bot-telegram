import { IsNotEmpty, IsString, IsNumber, IsBoolean, IsOptional } from 'class-validator';

class BotCommandSchema {
  @IsNumber()
  @IsOptional()
  bot_command_id: number;
  @IsNumber()
  @IsNotEmpty()
  command_type_id: number;
  @IsNotEmpty()
  @IsNumber()
  user_type_id: number;
  @IsNotEmpty()
  @IsString()
  tel_command: string;
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsBoolean()
  status: boolean;
  @IsString()
  @IsOptional()
  description: string;
  @IsString()
  @IsOptional()
  parameter: string;
}

export default BotCommandSchema;