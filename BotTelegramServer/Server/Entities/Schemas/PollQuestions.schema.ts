import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

class PollQuestionSchema {
  @IsOptional()
  @IsNumber()
  poll_question_id: number;
  @IsNotEmpty()
  @IsNumber()
  poll_id: number;
  @IsNotEmpty()
  @IsString()
  question: string;
  @IsOptional()
  @IsString()
  type_question: string;
  @IsOptional()
  @IsString()
  description: string;
}

export default PollQuestionSchema;