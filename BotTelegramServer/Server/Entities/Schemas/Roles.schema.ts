import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

class RoleSchema {
  @IsOptional()
  @IsNumber()
  role_id: number;
  @IsNotEmpty()
  @IsString()
  description: string;
}

export default RoleSchema;