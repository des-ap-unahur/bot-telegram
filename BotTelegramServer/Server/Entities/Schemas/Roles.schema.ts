import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

class RoleSchema {
  @IsNotEmpty()
  @IsNumber()
  role_id: number;
  @IsNotEmpty()
  @IsString()
  description: string;
}

export default RoleSchema;