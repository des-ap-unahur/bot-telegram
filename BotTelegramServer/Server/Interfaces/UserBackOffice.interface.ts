interface UserInterface {
  back_user_id?: number | null;
  user_role_id?: number | null;
  username:string;
  first_name: string;
  last_name: string;
  email: string;
  password?:string;
}
  
export default UserInterface;