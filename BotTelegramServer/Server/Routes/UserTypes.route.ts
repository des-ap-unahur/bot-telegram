import { Router } from 'express';
import UserTypesController from '../Controllers/UserTypes.controller';
import validateRequest from '../Middlewares/RequestValidator.middleware';
import UserTypeSchema from '../Entities/Schemas/UserTypes.schema';

const UserTypesRoute = Router();

UserTypesRoute.get('/user-types', UserTypesController.getUserTypes);
UserTypesRoute.get('/user-types/:id', UserTypesController.getUserTypeById);
UserTypesRoute.post('/user-types', validateRequest(UserTypeSchema), UserTypesController.postUserType);
UserTypesRoute.delete('/user-types/:id', UserTypesController.deleteUserType);
UserTypesRoute.put('/user-types/:id', validateRequest(UserTypeSchema), UserTypesController.updateUserType);

export default UserTypesRoute;