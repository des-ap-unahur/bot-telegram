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

{
  dni: 13232323,
  phone_number: 13232323,
  email: "algo",
  profile: "Estudiante" | "Profesor"
}