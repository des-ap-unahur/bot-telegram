import { Router } from 'express';
import UserBackOfficeController from '../Controllers/UserBackOffice.controller';
import validateRequest from '../Middlewares/RequestValidator.middleware';
import UserBackOfficeSchema from '../Entities/Schemas/UserBackOffice.schema';

const UserBackOfficeRoute = Router();

UserBackOfficeRoute.get('/users-back-office', UserBackOfficeController.getUsers);
UserBackOfficeRoute.get('/users-back-office/:id', UserBackOfficeController.getUserById);
UserBackOfficeRoute.post('/users-back-office', validateRequest(UserBackOfficeSchema), UserBackOfficeController.postUser);
UserBackOfficeRoute.delete('/users-back-office/:id', UserBackOfficeController.deleteUser);
UserBackOfficeRoute.put('/users-back-office/:id', validateRequest(UserBackOfficeSchema), UserBackOfficeController.updateUser);

export default UserBackOfficeRoute;