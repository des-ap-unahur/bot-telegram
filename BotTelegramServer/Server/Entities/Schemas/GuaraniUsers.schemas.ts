import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

class GuaraniUserSchema {
  @IsOptional()
  @IsNumber()
  guarani_user_id: number;
  @IsNotEmpty()
  @IsNumber()
  dni: number;
  @IsNotEmpty()
  @IsNumber()
  phone_number: number;
  @IsNotEmpty()
  @IsString()
  email: string;
  @IsNotEmpty()
  @IsString()
  profile: string;
}

export default GuaraniUserSchema;
