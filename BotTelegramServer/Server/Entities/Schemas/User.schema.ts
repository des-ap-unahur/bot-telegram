import { IsNotEmpty, IsString } from 'class-validator';

class UserSchema {
  id?: number;
  @IsNotEmpty()
  @IsString()
  username: string;
  @IsNotEmpty()
  @IsString()
  email: string;
  @IsNotEmpty()
  @IsString()
  password: string;
}
    
export default UserSchema;