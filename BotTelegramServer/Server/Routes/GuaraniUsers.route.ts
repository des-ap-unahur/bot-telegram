import { Router } from 'express';
import GuaraniUsersController from '../Controllers/GuaraniUsers.controller';
import validateRequest from '../Middlewares/RequestValidator.middleware';
import GuaraniUserSchema from '../Entities/Schemas/GuaraniUsers.schemas';

const GuaraniUserRoute = Router();

GuaraniUserRoute.get('/guarani-users', GuaraniUsersController.getGuaraniUsers);
GuaraniUserRoute.get('/guarani-users/:id', GuaraniUsersController.getGuaraniUserById);
GuaraniUserRoute.post('/guarani-users', validateRequest(GuaraniUserSchema), GuaraniUsersController.postGuaraniUser);
GuaraniUserRoute.delete('/guarani-users/:id', GuaraniUsersController.deleteGuaraniUser);
GuaraniUserRoute.put('/guarani-users/:id', validateRequest(GuaraniUserSchema), GuaraniUsersController.updateGuaraniUser);

export default GuaraniUserRoute;