import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

class PollSchema {
  @IsNumber()
  @IsOptional()
  poll_id: number;
  @IsNotEmpty()
  @IsNumber()
  user_type_id: number;
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  description: string;
}

export default PollSchema;