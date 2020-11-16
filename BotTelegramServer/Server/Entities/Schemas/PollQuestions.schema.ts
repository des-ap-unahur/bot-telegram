import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

class PollQuestionSchema {
  @IsNumber()
  poll_question_id: number;
  @IsNotEmpty()
  @IsNumber()
  poll_id: number;
  @IsString()
  question: string;
  @IsString()
  type_question?: string;
  @IsString()
  description: string;
}

export default PollQuestionSchema;