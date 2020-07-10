import { Router } from 'express';
import UserController from '../Controllers/User.controller';

const UserRoute = Router();

UserRoute.get('/users', UserController.get);

export default UserRoute;