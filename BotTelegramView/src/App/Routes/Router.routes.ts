import Dashboard from '../Components/Dashboard/Dashboard.component';
import GetPolls from '../Components/Polls/GetPolls/GetPolls.container';
import GetUserTypes from '../Components/UserTypes/GetUserTypes/GetUserTypes.container';
import GetRegisteredUsers from '../Components/RegisteredUsers/GetRegisteredUser/GetRegisteredUsers.container';
import Route from '../Interfaces/Routes.interface';


const publicRoutes: any[] = [
  {path: '/dashboard', component:Dashboard, exact:true},
  {path: '/dashboard/polls', component: GetPolls},
  {path: '/dashboard/user-types', component: GetUserTypes},
  {path: '/dashboard/bot-subs-users', component: GetRegisteredUsers},
];

const privateRoutes:Route[] = [
];

export default { publicRoutes, privateRoutes }