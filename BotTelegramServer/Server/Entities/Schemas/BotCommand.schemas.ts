import { IsNotEmpty, IsString, IsNumber, IsBoolean, IsOptional } from 'class-validator';

class BotCommandSchema {
  @IsOptional()
  @IsNumber()
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
  @IsOptional()
  @IsString()
  description: string;
  @IsOptional()
  @IsString()
  parameter: string;
}

export default BotCommandSchema;