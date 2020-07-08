import Dashboard from '../Components/Dashboard/Dashboard.component';

const publicRoutes = [
  {path:'/dashboard', component:Dashboard, exact:true},
];

const privateRoutes = [];

export default { publicRoutes, privateRoutes }