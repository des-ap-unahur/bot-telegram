import { IsNotEmpty, IsNumber, IsString, IsBoolean, IsDate } from 'class-validator';

class BotSubsUserSchema {
  @IsNotEmpty()
  @IsNumber()
  user_id: number;
  @IsNotEmpty()
  @IsNumber()
  dni: number;
  @IsNotEmpty()
  @IsString()
  first_name: string;
  @IsNotEmpty()
  @IsString()
  last_name: string;
  @IsNotEmpty()
  @IsDate()
  date_suscribe: Date;
  @IsNotEmpty()
  @IsBoolean()
  verified: boolean;
}

export default BotSubsUserSchema;