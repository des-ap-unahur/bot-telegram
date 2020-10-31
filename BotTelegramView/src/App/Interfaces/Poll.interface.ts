import QuestionInterface from "./Question.interface";
import UserTypes from "./UserTypes.interface";

interface PollInterface{
  poll_id?: number;
  name: string;
  description: string;
  user_type_id: number;
  userType?: UserTypes[];
  questions: QuestionInterface[]
  createdAt?: string;
  updatedAt?: string;
}

export default PollInterface;