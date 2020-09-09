import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

class CommandTypeSchema {
  @IsNotEmpty()
  @IsNumber()
  command_types_id: number;
  @IsNotEmpty()
  @IsString()
  type: string;
  @IsNotEmpty()
  @IsString()
  description: string;
}

export default CommandTypeSchema;