import { IsNotEmpty, IsNumber } from 'class-validator';

class PollRolesAccessSchema {
  @IsNotEmpty()
  @IsNumber()
  role_id: number;
  @IsNotEmpty()
  @IsNumber()
  poll_id: number;
}

export default PollRolesAccessSchema;