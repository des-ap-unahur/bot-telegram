export interface UserInterface {
  back_user_id: number;
  user_role_id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
}

export interface AuthStateInterface {
  lang: string;
  token: string;
  user: UserInterface | null;
}