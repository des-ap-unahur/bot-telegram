interface Route {
  path: string;
  component: () => JSX.Element;
  exact?: boolean;
  permissions?: Array<string> 
}

export default Route;