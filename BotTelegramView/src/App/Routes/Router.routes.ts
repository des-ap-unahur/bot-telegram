import GetCommandsContainer from '../Components/BotCommands/GetCommands/GetCommands.container';
import Dashboard from '../Components/Dashboard/Dashboard.container';
import GetPolls from '../Components/Polls/GetPolls/GetPolls.container';
import GetUserTypes from '../Components/UserTypes/GetUserTypes/GetUserTypes.container';
import GetBotUsers from '../Components/BotUsers/GetBotUsers/GetBotUsers.container';
import Login from '../Components/Auth/Login/Login.container';
import Route from '../Interfaces/Global/Routes.interface';

const publicRoutes: Route[] = [
  {path: '/login', component: Login, exact:true},
];

const privateRoutes:Route[] = [
  {path: '/dashboard', component:Dashboard, exact:true},
  {path: '/dashboard/polls', component: GetPolls},
  {path: '/dashboard/user-types', component: GetUserTypes},
  {path: '/dashboard/bot-actions', component: GetCommandsContainer},
  {path: '/dashboard/subscribers', component: GetBotUsers},
];

export default { publicRoutes, privateRoutes }