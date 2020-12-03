interface QuestionInterface {
  poll_question_id?: number | string;
  poll_id: number | string;
  question: string; 
  description: string;
  type_question?: string;
  createdAt?: string;
  updatedAt?: string;
}

export default QuestionInterface