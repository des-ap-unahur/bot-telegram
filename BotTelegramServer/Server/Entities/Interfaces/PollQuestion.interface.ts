interface PollQuestionInterface{
  poll_question_id?: number;
  poll_id: number;
  question: string;
  type_question?: string;
  description?: string;
}
   
export default PollQuestionInterface;