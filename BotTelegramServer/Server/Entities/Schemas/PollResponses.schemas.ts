import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

class PollResponseSchema {
  @IsNotEmpty()
  @IsNumber()
  poll_response_id: number;
  @IsNotEmpty()
  @IsNumber()
  user_id: number;
  @IsNotEmpty()
  @IsString()
  response: string;
}

export default PollResponseSchema;