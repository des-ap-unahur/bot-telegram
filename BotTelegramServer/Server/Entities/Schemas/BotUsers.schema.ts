import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

class BotUserSchema{
  @IsNotEmpty()
  @IsNumber()
  bot_user_id: number;
  @IsNotEmpty()
  @IsNumber()
  user_type_id: number;
  @IsNotEmpty()
  @IsNumber()
  tel_user_id: number;
  @IsNotEmpty()
  @IsString()
  tel_last_name: string;
  @IsNotEmpty()
  @IsString()
  tel_first_name: string;
  @IsNotEmpty()
  @IsString()
  tel_username: string;
}

export default BotUserSchema;