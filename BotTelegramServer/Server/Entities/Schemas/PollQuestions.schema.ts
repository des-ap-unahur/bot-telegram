import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

class PollQuestionSchema {
  @IsNumber()
  @IsOptional()
  poll_question_id: number;
  @IsNotEmpty()
  @IsNumber()
  poll_id: number;
  @IsString()
  question: string;
  @IsString()
  @IsOptional()
  type_question?: string;
  @IsString()
  description: string;
}

export default PollQuestionSchema;