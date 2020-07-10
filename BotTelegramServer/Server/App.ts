import express, { Application } from 'express';
import AppConfig from './Interfaces/AppConfig.interface';
import bot from './Services/Bot.service';
import { botHears, botCommands, botOn, botCommands1, botHears1, botCommandInit, botCommandsAlum } from './Commands/Bot.commands';
import Database from './Database/Database'
import { Extra } from 'telegraf';
import {personas} from './datos.js'

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

    this.routes(routes);
    this.middlewares(middlewares);
    this.dbSetup()
    this.botSetup();
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

  public dbSetup = () => {
    this.app.use((req: any, res, next) => 
      {
        req.database = Database;
        next();
      }
    )
  }
  
  public botSetup = () => {
    bot.start((ctx:any) => {ctx.reply(`¡Bienvenido al botTestUnahur!

      Características (por ahora):
      - Ubicacion de la unahur
      - Programas de carreras
      - Oferta Academica
      - Encuestas
      Recorda que tenes que registrarte para acceder a diferentes 
      acciones!
      
      *Primero te pedo que te registres, podes hacerlo
       apretando aca /registrarme o escribiendo el comando.

      *Escribe /ayuda para ver los comando disponibles`)});

   botCommandInit.map(command => bot.command(command.command, command.response))
   
    bot.on('contact', (ctx:any) => {
     
      const id_user= ctx.from.id
      console.log(ctx.update.message.contact.phone_number);
      const numerodetelefono = ctx.update.message.contact.phone_number
      console.log(ctx.update.message.contact)
    
      if(this.vali(numerodetelefono)){
        const perfilVerificado = personas.filter(persona => persona.telefono === numerodetelefono.substr(-10))

        if(perfilVerificado[0].esProfe){
          botHears.map(hears => bot.hears(hears.message, hears.response));
          botCommands.map(command => bot.command(command.command, command.response));
     
        }else{
          botCommandsAlum.map(command => bot.command(command.command, command.response));
        }


      
      console.log(perfilVerificado[0])

      ctx.reply(`Genial, pudimos verificar tu peril y quedo de la siguiente manera 
           NOMBRE   ---> ${perfilVerificado[0].nombre}
           APELLIDO ---> ${perfilVerificado[0].apellido}
           TELEFONO ---> ${perfilVerificado[0].telefono}
           PERFIL   ---> ${perfilVerificado[0].esProfe?' PROFESOR':' ALUMNO'}    `)
            
           ctx.reply(`Podes ver las funcionalidades que tenes con /ayuda`)

      }else{


        botHears1.map(hears => bot.hears(hears.message, hears.response));
        botCommands1.map(command => bot.command(command.command, command.response));
        ctx.reply(`Genial, pudimos verificar tu peril y quedo de la siguiente manera 
        NOMBRE   ---> ${ctx.update.message.contact.first_name}
        APELLIDO ---> ${ctx.update.message.contact.last_name}
        TELEFONO ---> ${ctx.update.message.contact.phone_number.substr(-10)}
        PERFIL   --->  PUBLICO GENERAL    `)
        ctx.reply(`Recorda actualizar tus datos en el siu para que en caso que 
sea un error, puedas registrarte nuevamente y 
poder acceder a otras funcionalidades`)

    ctx.reply(`Podes ver las funcionalidades que tenes con /ayuda`)



      }
       })
   
  
    bot.launch();
  }

public vali = (telephone:string): boolean =>{
 return !!personas.find(persona => persona.telefono === telephone.substr(-10))
 }
}


export default App;
