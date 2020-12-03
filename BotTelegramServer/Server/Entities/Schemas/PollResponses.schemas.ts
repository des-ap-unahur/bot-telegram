import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

class PollResponseSchema {
  @IsOptional()
  @IsNumber()
  poll_response_id: number
  @IsNotEmpty()
  @IsNumber()
  response_id: number;
  @IsNotEmpty()
  @IsNumber()
  user_id: number;
  @IsNotEmpty()
  @IsString()
  response: string;
}

export default PollResponseSchema;