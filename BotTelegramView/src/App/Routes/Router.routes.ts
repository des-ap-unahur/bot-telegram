import Dashboard from '../Components/Dashboard/Dashboard.component';
import Route from '../Interfaces/Routes.interface';

const publicRoutes:Array<Route> = [
  {path:'/dashboard', component:Dashboard, exact:true},
];

const privateRoutes:Array<any> = [];

export default { publicRoutes, privateRoutes }