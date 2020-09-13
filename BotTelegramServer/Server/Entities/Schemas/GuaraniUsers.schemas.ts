import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

class GuaraniUserSchema {
  @IsNotEmpty()
  @IsNumber()
  dni: number;
  @IsNotEmpty()
  @IsString()
  emai: string;
  @IsNotEmpty()
  @IsString()
  profile: string;
}

export default GuaraniUserSchema;