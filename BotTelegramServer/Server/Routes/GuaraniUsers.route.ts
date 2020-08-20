import { Router } from 'express';
import GuaraniUsersController from '../Controllers/GuaraniUsers.controller';

const GuaraniUserRoute = Router();

GuaraniUserRoute.get('/guarani-users', GuaraniUsersController.getGuaraniUsers);
GuaraniUserRoute.get('/guarani-users/:id', GuaraniUsersController.getGuaraniUserById);
GuaraniUserRoute.post('/guarani-users', GuaraniUsersController.postGuaraniUser);
GuaraniUserRoute.delete('/guarani-users/:id', GuaraniUsersController.deleteGuaraniUser);
GuaraniUserRoute.put('/guarani-users/:id', GuaraniUsersController.updateGuaraniUser);

export default GuaraniUserRoute;