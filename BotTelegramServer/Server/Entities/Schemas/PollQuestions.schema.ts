import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

class PollQuestionSchema {
  @IsNotEmpty()
  @IsNumber()
  poll_question_id: number;
  @IsNotEmpty()
  @IsNumber()
  poll_id: number;
  question: string;
  @IsNotEmpty()
  @IsString()
  type_question: string;
  @IsNotEmpty()
  @IsString()
  description: string;
}

export default PollQuestionSchema;