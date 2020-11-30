import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

class PollResponseSchema {
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