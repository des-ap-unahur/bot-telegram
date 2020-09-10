import { Router } from 'express';
import UserTypesController from '../Controllers/UserTypes.controller';
import validateRequest from '../Middlewares/RequestValidator.middleware';
import UserTypeSchema from '../Entities/Schemas/UserTypes.schema';

const UserTypesRoute = Router();

UserTypesRoute.get('/userTypes', UserTypesController.getUserTypes);
UserTypesRoute.get('/userTypes/:id', UserTypesController.getUserTypeById);
UserTypesRoute.post('/userTypes', validateRequest(UserTypeSchema), UserTypesController.postUserType);
UserTypesRoute.delete('/userTypes/:id', UserTypesController.deleteUserType);
UserTypesRoute.put('/userTypes/:id', validateRequest(UserTypeSchema), UserTypesController.updateUserType);

export default UserTypesRoute;