# bot-telegram
Desarrollo de bot en telegram para la UNAHUR

## Setup del proyecto:

### Forma Nº1:

Una vez clonado el proyecto correr el archivo dev-setup de la siguiente manera.

```bash
cd bot-telegram
docker-compose up
sudo ./dev-setup.sh
sudo ./run-migrations.sh
sudo ./run-seeds.sh
```

Con esto el entorno deberia estar listo para desarrollar.

### Forma Nº2:

como primer paso nos paramos en develop y starteamos el docker.
```bash
cd bot-telegram
git checkout develop
docker-compose up
```

como segundo paso borramos los 2 node_modules de BotTelegramServer y BotTelegramView, ya que en muchas ocasiones el paquete npm de dentro de docker trae los node_modules deprecados y cambiamos los archivos de configuracion y ambiente por los .local, para tener la configuracion mas actualizada de develop.

#### BotTelegramServer:

```
cd BotTelegramServer
npm install
cd Environments
cp development.env.local development.env
```

#### BotTelegramView:

```
cd BotTelegramView
npm install
cd src/App/Config
cp Constants.config.js.local Constants.config.js
```

Nota: El comando cp basicamente copia y pega el archivo local, con el nombre que nosotros queramos, pero en este caso lo necesitamos sin ese .local nada mas.

Como tercer paso ponemos en marcha la base de datos.

#### BotTelegramDatabase:

```bash
docker-compose exec bot-telegram-database bash
mysql -u root -p
CREATE DATABASE IF NOT EXISTS bot_telegram_database;
```
Nota: Si pide la contraseña en el segundo comando lo que tenes que hacer es copiar la contraseña de root que esta en el docker-compose.yml.

Como 4to paso correr las migraciones.

```bash
docker-compose exec bot-telegram-server bash
alias sequelize=node_modules/.bin/sequelize
sequelize db:migrate
```

Como 5to paso correr las semillas.

```bash
docker-compose exec bot-telegram-server bash
alias sequelize=node_modules/.bin/sequelize
sequelize db:seed:all
```

Con esto ya el setup de desarrollo ya estaria listo para que puedas darle un buen aporte a este proyecto.

## Servicios disponibles:

### BotTelegramServer:
----------------------------
Este es nuestro servicio de backend, el cual incluye la logica de negocios del lado del servidor y el backoffice.
En este servicio se utilizan las siguientes tecnologias:
  * Entorno de ejecucion:
    * Ts-Node
  * Como lenguaje/herramienta de desarrollo:
    * Typescript
    * Nodemon
    * Morgan
    * Jest
  * Frameworks:
    * Express
    * Telegraf
    * Jest
    * Middlewares:
    * Json Web Token
    * Passport
  * ORM:
    * Sequelize-typescript

Url de acceso http://localhost:5000/

### BotTelegramView:
----------------------------
Este es nuestro servicio de vistas, se encarga especialmente de las vistas del backoffice.
En este servicio se utilizan las siguientes tecnologias:
  * Entorno de ejecucion:
    * Node:
  * Lenguaje:
    * Typescript
  * Frameworks:
    * React
    * Redux
    * Material-ui
  * Herramientas:
    * Browser-Routes
    * Axios

Url de acceso http://localhost:3000/

### BotTelegramDatabase:
Este es nuestro servicio de base de datos que esta en mysql.

Url de acceso http://localhost:3306/


## Sección de ayuda:

### Docker 

Ejecutar bash de un contenedor:
```bash
docker-compose nombre-de-contenedor exec bash
```

Parar a todos los contendores que estan corriendo:
```bash
docker rm -f $(docker ps -qa)
```

### Sequelize:
Establecer alias al entrar en bash:
```bash
alias sequelize=node_modules/.bin/sequelize
```

Correr las migraciones pendientes:

```bash
sequelize db:migrate
```

Generar una migración:

```bash
sequelize migration:generate
```

Generar un modelo:

```bash
sequelize model:generate
```

Generar una semilla:

```bash
sequelize seed:generate
```

Correr todas las semillas:

```bash
sequelize db:seed:all
```
