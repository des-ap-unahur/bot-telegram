import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

class PollSchema {
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