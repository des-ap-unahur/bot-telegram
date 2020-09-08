interface PollQuestionInterface{
  poll_question_id?: number | null;
  poll_id?: number | null;
  question?: string | null;
  type_question?: string | null;
  description?: string | null;
}
   
export default PollQuestionInterface;