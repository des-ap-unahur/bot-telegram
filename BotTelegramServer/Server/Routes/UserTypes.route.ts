import { Router } from 'express';
import UserTypesController from '../Controllers/UserTypes.controller';

const UserTypesRoute = Router();

UserTypesRoute.get('/userTypes', UserTypesController.getUserTypes);
UserTypesRoute.get('/userTypes/:id', UserTypesController.getUserTypeById);
UserTypesRoute.post('/userTypes', UserTypesController.postUserType);
UserTypesRoute.delete('/userTypes/:id', UserTypesController.deleteUserType);
UserTypesRoute.put('/userTypes/:id', UserTypesController.updateUserType);

export default UserTypesRoute;