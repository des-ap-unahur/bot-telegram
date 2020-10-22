import UserTypes from "./UserTypes.interface";

interface PollInterface{
  poll_id?: number;
  name: string;
  description: string;
  user_type_id: number;
  userType?: UserTypes[];
  createdAt?: string;
  updatedAt?: string;
}

export default PollInterface;