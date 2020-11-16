import { IsNotEmpty, IsString, IsNumber, IsBoolean } from 'class-validator';

class BotCommandSchema {
  @IsNotEmpty()
  @IsNumber()
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
  description: string;
  parameter: string;
}

export default BotCommandSchema;