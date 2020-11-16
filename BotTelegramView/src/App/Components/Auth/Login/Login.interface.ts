export interface LoginProps {
  auth: boolean;
  loginRequest: (requestParams: any) => void;
}

export interface LoginContentProps {
  language: any; 
  handleChange: (e: any) => void
  handleLogin: () => Promise<void>
  username: string;
  password: string;
}