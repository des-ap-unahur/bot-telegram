import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

class UserBackOfficeSchema {
  @IsNotEmpty()
  @IsNumber()
  back_user_id: number;
  @IsNotEmpty()
  @IsNumber()
  user_role_id: number;
  @IsNotEmpty()
  @IsString()
  first_name: string;
  @IsNotEmpty()
  @IsString()
  last_name: string;
  @IsNotEmpty()
  @IsString()
  email: string;
}

export default UserBackOfficeSchema;