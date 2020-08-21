import App from './App';
import { configServer } from './Config/Server/Server.config';
import BotCommandRoute from './Routes/BotCommand.route';
import BotNestedCommandsRoute from './Routes/BotNestedCommands.route';
import BotResponsesRoute from './Routes/BotResponses.route';
import BotResponsesFilesRoute from './Routes/BotResponsesFiles.route';
import BotSubsUserRoute from './Routes/BotSubsUsers.route';
import BotUserRoute from './Routes/BotUser.route';
import CommandsTypes from './Routes/CommandsTypes.route';
import GuaraniUserRoute from './Routes/GuaraniUsers.route';
import HomeRoute from './Routes/Home.route';
import PollRoute from './Routes/Poll.route';
import PollQuestionsRoute from './Routes/PollQuestions.route';
import PollResponsesRoute from './Routes/PollResponses.route';
import RolesRoute from './Routes/Roles.route';
import UserBackOfficeRoute from './Routes/UserBackOffice.route';
import UserTypesRoute from './Routes/UserTypes.route';

const app = new App({
  port: Number(configServer.get('PORT')),
  name: configServer.get('NAME'),
  routes: [
    {route: HomeRoute, path: '/'},
    {route: PollRoute, path: '/api'},
    {route: PollQuestionsRoute, path:'/api'},
    {route: BotNestedCommandsRoute, path:'/api'},
    {route: BotResponsesRoute, path: '/api'},
    {route: BotResponsesFilesRoute, path:'/api'},
    {route: BotSubsUserRoute, path:'/api'},
    {route: BotUserRoute, path: '/api'},
    {route: CommandsTypes, path:'/api'},
    {route: GuaraniUserRoute, path:'/api'},
    {route: PollResponsesRoute, path: '/api'},
    {route: RolesRoute, path:'/api'},
    {route: UserBackOfficeRoute, path:'/api'},
    {route: UserTypesRoute, path: '/api'},
    {route: BotCommandRoute, path:'/api'},
  ]
})

app.listen();