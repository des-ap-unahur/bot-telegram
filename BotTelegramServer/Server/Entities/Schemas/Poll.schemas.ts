import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

class PollSchema {
  @IsOptional()
  @IsNumber()
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