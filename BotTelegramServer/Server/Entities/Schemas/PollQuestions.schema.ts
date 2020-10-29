import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

class PollQuestionSchema {
  poll_question_id: number;
  @IsNotEmpty()
  @IsNumber()
  poll_id: number;
  @IsNotEmpty()
  @IsString()
  question: string;
  type_question?: string;
  @IsString()
  description: string;
}

export default PollQuestionSchema;