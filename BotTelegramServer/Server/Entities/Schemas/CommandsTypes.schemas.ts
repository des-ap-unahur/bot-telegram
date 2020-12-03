import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

class CommandTypeSchema {
  @IsOptional()
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