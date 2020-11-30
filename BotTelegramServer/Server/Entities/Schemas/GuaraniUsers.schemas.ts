import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

class GuaraniUserSchema {
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
