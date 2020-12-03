import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

class UserBackOfficeSchema {
  @IsOptional()
  @IsNumber()
  back_user_id: number;
  @IsOptional()
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