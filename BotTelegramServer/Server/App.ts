import express, { Application } from 'express';
import AppConfig from './Interfaces/AppConfig.interface';

class App {
  public app: Application;
  public port: Number;
  public name: String;

  constructor(appConfig: AppConfig){
    const {
      port, 
      name, 
      routes,
      middlewares
    } = appConfig;

    this.app = express();
    this.port = port;
    this.name = name;

    this.routes(routes)
    this.middlewares(middlewares)
  }

  public middlewares = (middlewares: Array<any>) => {
    middlewares.map(middleware => {
      this.app.use(middleware)
    })
  }

  public routes = (routes: Array<any>) => {
    routes.map(route => {
      this.app.use(route.path, route.route)
    })
  }

  public listen = () => {
    this.app.listen(this.port, () => {
      console.log('%s running.', this.name);
    })
  }
}

export default App;
