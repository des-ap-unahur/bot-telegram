## Estructura de proyecto:
  * Environments: En este lugar se encuentran las variables de entorno de la API.
  * Server:
    * Bot: 
      * Controller: En esta carpeta se encuentra el controlador del bot.
      * Commands: En esta carpeta se encuentran los comandos del bot.
      * Markups: En esta carpeta se encuentran las partes visuales de los comandos.
      * Utils: En esta carpeta se encuentran helpers del bot osea funciones complejas que lo unico que hacen es quitarle legibilidad al codigo.
    * Config: En esta carpeta se encuentran las configuraciones de la API.
    * Controllers: En esta carpeta se encuentran los controladores de los modelos.
    * Database: En esta carpeta se encuentra la instancia de sequelize que controla la base de datos, las migraciones y las semillas.
    * Docs: En esta carpeta se encuentra toda la documentacion de la API.
    * Entities:
      * Models: En esta carpeta estan los modelos de la aplicacion.
      * Repositories: En esta carpeta estan los repositorios de los modelos, los cuales se encargan de tener los metodos para manejar los modelos.
      * Schemas: En esta carpeta se encuentran los esquemas de los modelos, para validar los datos que nos llegan en un request.
      * Services: En esta carpeta se encuentran los servicios de la API.
    * Interfaces: En esta carpeta se encuentran las interfaces de la API.
    * Mails: En esta carpeta se encuentran los templates de los mails que el bot envia a los usuarios.
    * Middlewares: En esta carpeta se encuentra los middlewares osea entidades que estan en el medio de un request asegurandose que se cumplan ciertas condiciones, como estar autenticado o que el request sea valido.
    * Postman: En esta carpeta se encuentra una coleccion de postman la cual tiene documentada todos los endpoint de la API.
    * Routes: En esta carpeta estan todas las rutas de la API.
    * Test: En esta carpeta se localizan todos los test unitarios de la API.