import { IsNotEmpty, IsString, IsNumber, IsBoolean } from 'class-validator';

class BotCommandSchema {
  @IsNotEmpty()
  @IsNumber()
  command_type_id: number;
  user_type_id: number | null;
  @IsNotEmpty()
  @IsString()
  tel_command: string;
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsBoolean()
  status: boolean;
  description: string | null;
  parameter: string | null;
}

export default BotCommandSchema;