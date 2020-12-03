import { IsNotEmpty, IsString } from 'class-validator';

class UserSchema {
  @IsNotEmpty()
  @IsString()
  username: string;
  @IsNotEmpty()
  @IsString()
  password: string;
}
    
export default UserSchema;