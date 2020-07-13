import { Router } from 'express';
import UserBackOfficeController from '../Controllers/UserBackOffice.controller';

const UserBackOfficeRoute = Router();

UserBackOfficeRoute.get('/users-back-office', UserBackOfficeController.getUsers);
UserBackOfficeRoute.get('/users-back-office/:id', UserBackOfficeController.getUserById);
UserBackOfficeRoute.post('/users-back-office', UserBackOfficeController.postUser);
UserBackOfficeRoute.delete('/users-back-office/:id', UserBackOfficeController.deleteUser);
UserBackOfficeRoute.put('/users-back-office/:id', UserBackOfficeController.updateUser);

export default UserBackOfficeRoute;