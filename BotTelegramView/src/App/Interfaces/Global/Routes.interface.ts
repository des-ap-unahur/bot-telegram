interface Route {
  path: string;
  component: any;
  exact?: boolean;
  permissions?: Array<string> 
}

export default Route;