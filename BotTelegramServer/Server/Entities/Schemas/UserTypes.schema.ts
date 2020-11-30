import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

class UserTypeSchema {
  @IsNotEmpty()
  @IsNumber()
  user_type_id: number;
  @IsNotEmpty()
  @IsString()
  type: string;
  @IsNotEmpty()
  @IsString()
  description: string;
}

export default UserTypeSchema;