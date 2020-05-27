interface AppConfig{
  port: Number;
  name: String;
  middlewares: Array<any>; 
  routes: Array<any>
}

export default AppConfig;