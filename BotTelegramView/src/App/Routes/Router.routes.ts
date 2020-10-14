import Dashboard from '../Components/Dashboard/Dashboard.component';
import GetPolls from '../Components/Polls/GetPolls/GetPolls.container';
import Route from '../Interfaces/Routes.interface';

const publicRoutes: any[] = [
  {path: '/dashboard', component:Dashboard, exact:true},
  {path: '/dashboard/polls', component: GetPolls}
];

const privateRoutes:Route[] = [
];

export default { publicRoutes, privateRoutes }