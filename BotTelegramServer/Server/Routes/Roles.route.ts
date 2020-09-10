import { Router } from 'express';
import RolesController from '../Controllers/Roles.controller';
import validateRequest from '../Middlewares/RequestValidator.middleware';
import RoleSchema from '../Entities/Schemas/Roles.schema';

const RolesRoute = Router();

RolesRoute.get('/Roles', RolesController.getRoles);
RolesRoute.get('/Roles/:id', RolesController.getRolById);
RolesRoute.post('/Roles', validateRequest(RoleSchema), RolesController.postRol);
RolesRoute.delete('/Roles/:id', RolesController.deleteRol);
RolesRoute.put('/Roles/:id', validateRequest(RoleSchema), RolesController.updateRol);

export default RolesRoute;