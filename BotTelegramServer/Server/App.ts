import express, { Application } from 'express';
import AppConfig from './Interfaces/AppConfig.interface';
import bot from './Entities/Services/Bot.service';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import { buildCommands } from './Bot/Controller/Bot.controller';
import Database from './Database/Database';

class App {
  private app: Application;
  private port: Number;
  private name: String;

  constructor(appConfig: AppConfig){
    const {
      port, 
      name, 
      routes,
    } = appConfig;

    this.app = express();
    this.port = port;
    this.name = name;

    this.middlewares();
    this.routes(routes);
    this.dbSetup()
    this.botSetup();
  }

  public middlewares = (): void => {
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: true }))
    this.app.use(cors())
    this.app.use(morgan('dev'))
  }

  public routes = async (routes: Array<any>) => {
    await routes.map(route => {
      this.app.use(route.path, route.route)
    })
  }

  public listen = () => {
    this.app.listen(this.port, () => {
      console.log('%s running.', this.name);
    })
  }

  public dbSetup = () => {
    this.app.use((req: any, res, next) => 
      {
        req.database = Database;
        next();
      }
    )
  }
  
  public botSetup = async () => {
    await buildCommands(bot);
  }
}


export default App;
