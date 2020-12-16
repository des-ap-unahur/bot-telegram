import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

class UserSchema {
  @IsNotEmpty()
  @IsString()
  username: string;
  @IsOptional()
  @IsString()
  first_name: string;
  @IsOptional()
  @IsString()
  last_name: string;
  @IsOptional()
  @IsString()
  email: string;
  @IsNotEmpty()
  @IsString()
  password: string;
}
    
export default UserSchema;